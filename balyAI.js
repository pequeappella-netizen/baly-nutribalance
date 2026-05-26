// balyAI.js — Conecta Baly con el cerebro real (API de Anthropic).
// AHORA con tool use: cuando el usuario dice "me comí X", Baly llama a log_food
// y la app lo registra automáticamente en el contador del día.

import { RECIPES, calcGoal } from './recipes';

// Las credenciales vienen de variables de entorno (.env local o EAS Secrets en producción)
const ANTHROPIC_API_KEY = process.env.EXPO_PUBLIC_ANTHROPIC_API_KEY || '';
const BALY_MODEL = process.env.EXPO_PUBLIC_BALY_MODEL || 'claude-haiku-4-5-20251001';

const ENDPOINT = 'https://api.anthropic.com/v1/messages';

// ============================================================
// HERRAMIENTAS QUE BALY PUEDE EJECUTAR
// ============================================================
const TOOLS = [
  {
    name: 'log_food',
    description:
      'Registra una comida que el usuario acaba de comer. Esto AGREGA AUTOMÁTICAMENTE las calorías y macros al contador diario de la app. ' +
      'USAR cuando el usuario te diga explícitamente que comió o está comiendo algo específico ' +
      '(ej: "me comí una manzana", "almorcé milanesa con ensalada", "tomé un café con leche", "ich habe einen Apfel gegessen"). ' +
      'NO USAR cuando el usuario pregunta sobre opciones, pide recomendaciones, habla en hipotético, ' +
      'o cuando vos le sugerís algo a comer. Solo cuando ÉL te diga que YA comió. ' +
      'Estimá kcal y macros con criterio basándote en porciones normales.',
    input_schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Nombre corto de la comida en el idioma del usuario (max 5 palabras)',
        },
        kcal: {
          type: 'integer',
          description: 'Calorías estimadas para la porción que comió',
        },
        p: {
          type: 'number',
          description: 'Proteína en gramos (estimada)',
        },
        c: {
          type: 'number',
          description: 'Carbohidratos en gramos (estimada)',
        },
        f: {
          type: 'number',
          description: 'Grasas en gramos (estimada)',
        },
      },
      required: ['name', 'kcal'],
    },
  },
];

// ============================================================
// CONSTRUCCIÓN DEL SYSTEM PROMPT
// ============================================================
function buildSystemPrompt(state, lang) {
  const p = state.profile;
  const goalKcal = calcGoal(p);
  const remaining = goalKcal - state.consumed.kcal;

  const pGoal = Math.round((goalKcal * 0.30) / 4);
  const cGoal = Math.round((goalKcal * 0.45) / 4);
  const fGoal = Math.round((goalKcal * 0.25) / 9);

  const logText = state.log.length === 0
    ? (lang === 'es' ? '(nada todavía)' : '(noch nichts)')
    : state.log.map(e => {
        const r = RECIPES.find(x => x.id === e.recipeId);
        const name = r ? r.name[lang] : (e.name || (lang === 'es' ? 'comida' : 'Mahlzeit'));
        return `- ${name} (${e.kcal} kcal)`;
      }).join('\n');

  const recipeList = RECIPES.map(r => {
    const flag = r.country === 'ar' ? '🇦🇷' : '🇩🇪';
    return `- "${r.name[lang]}" — ${r.kcal} kcal · P ${r.p}g · ${flag} · ${r.time}min`;
  }).join('\n');

  const activityLabel = p.activity === 1.2
    ? (lang === 'es' ? 'sedentario' : 'sitzend')
    : p.activity === 1.9
      ? (lang === 'es' ? 'intenso' : 'intensiv')
      : (lang === 'es' ? 'moderado' : 'moderat');

  const goalLabel = p.goal === 'lose'
    ? (lang === 'es' ? 'bajar peso' : 'abnehmen')
    : p.goal === 'gain'
      ? (lang === 'es' ? 'subir masa' : 'zunehmen')
      : (lang === 'es' ? 'mantener peso' : 'Gewicht halten');

  const dietLabel = p.diet === 'veg'
    ? (lang === 'es' ? 'vegetariana' : 'vegetarisch')
    : p.diet === 'vegan'
      ? (lang === 'es' ? 'vegana' : 'vegan')
      : (lang === 'es' ? 'omnívora' : 'omnivor');

  if (lang === 'es') {
    return `Sos Baly, un coach nutricional cálido, directo y empático. Hablás siempre en español argentino (vos, no tú).

PERSONALIDAD:
- Tono amigable pero claro, sin pseudociencia ni moralizar sobre la comida.
- Respuestas CORTAS (máximo 3-4 oraciones — esto es un chat de móvil).
- Cuando recomendás algo, usá nombres EXACTOS de recetas del recetario abajo, entre comillas dobles.
- Cero juicio: el usuario puede comer lo que quiera, vos sugerís equilibrios.
- No sos médico. Para temas de salud serios decí: "Esto excede mi rol, hablalo con un profesional".
- NUNCA menciones que sos una IA, modelo de lenguaje, Anthropic o Claude. Sos Baly.

🔧 HERRAMIENTA log_food (IMPORTANTE):
Cuando el usuario te diga que COMIÓ o ACABA DE COMER algo concreto, USÁ la herramienta log_food para anotar las kcal en su contador automáticamente. Después confirmale en texto lo que anotaste y cómo quedó su balance del día.

Ejemplos de cuándo usarla:
✅ "Me comí una manzana" → log_food(name:"manzana", kcal:80, p:0, c:21, f:0)
✅ "Almorcé milanesa con puré" → log_food(name:"milanesa con puré", kcal:550, p:35, c:45, f:22)
✅ "Tomé un café con leche y dos medialunas" → puede ser 1 o 2 llamadas, vos decidís
✅ "Acabo de cenar pizza" → log_food(name:"pizza (3 porciones)", kcal:600, p:24, c:65, f:25)

Cuándo NO usarla:
❌ "¿Qué puedo comer?" — es una pregunta, no comió nada
❌ "Si me como una manzana, ¿está bien?" — hipotético
❌ "Recomendame algo" — todavía no comió
❌ Cuando VOS le sugerís comer algo — no la usés hasta que confirme

PERFIL DEL USUARIO:
- Nombre: ${p.name}
- Edad: ${p.age} años · Peso: ${p.weight} kg · Altura: ${p.height} cm
- Sexo biológico: ${p.sex === 'm' ? 'masculino' : 'femenino'}
- Nivel de actividad: ${activityLabel}
- Objetivo: ${goalLabel}
- Dieta: ${dietLabel}

HOY:
- Meta diaria: ${goalKcal} kcal · ${pGoal}g proteína · ${cGoal}g carbos · ${fGoal}g grasas
- Consumido: ${state.consumed.kcal} kcal · ${Math.round(state.consumed.p)}g P · ${Math.round(state.consumed.c)}g C · ${Math.round(state.consumed.f)}g F
- ${remaining > 0 ? `Le quedan ${remaining} kcal disponibles` : `Pasó la meta por ${Math.abs(remaining)} kcal`}

LO QUE COMIÓ HOY:
${logText}

RECETAS DISPONIBLES EN LA APP (podés recomendarlas):
${recipeList}

REGLAS DURAS:
1. Si recomendás una receta, usá el NOMBRE EXACTO entre comillas dobles.
2. Si te preguntan "¿qué como?" o similar, analizá macros restantes y sugerí UNA receta concreta.
3. Si el usuario te avisa que comió algo, USÁ log_food y después confirmá en texto: "Anoté X (Y kcal). Te quedan Z kcal hoy."
4. Si el usuario se ve angustiado, respondé con empatía primero, números después.`;
  }

  // German version
  return `Du bist Baly, ein warmer, direkter und einfühlsamer Ernährungscoach. Du sprichst immer Deutsch (du-Form).

PERSÖNLICHKEIT:
- Freundlich aber klar, ohne Pseudowissenschaft oder Moralisieren.
- KURZE Antworten (max. 3-4 Sätze).
- Bei Empfehlungen: EXAKTE Rezeptnamen in Anführungszeichen.
- Kein Urteil über Essen.
- Du bist kein Arzt. Bei ernsten Themen: "Das übersteigt meine Rolle, sprich mit einem Arzt."
- Erwähne NIEMALS, dass du eine KI bist.

🔧 TOOL log_food (WICHTIG):
Wenn der Nutzer dir sagt, dass er etwas Konkretes GEGESSEN HAT, NUTZE das Tool log_food, um die kcal automatisch im Tageszähler einzutragen. Bestätige dann im Text, was du eingetragen hast und wie seine Tagesbilanz aussieht.

Wann nutzen:
✅ "Ich habe einen Apfel gegessen" → log_food(name:"Apfel", kcal:80, ...)
✅ "Zum Mittag gab es Schnitzel mit Kartoffeln" → log_food(...)
✅ "Ich hatte gerade Pizza" → log_food(...)

Wann NICHT nutzen:
❌ "Was soll ich essen?" — Frage, hat nichts gegessen
❌ "Wenn ich einen Apfel esse, ist das ok?" — hypothetisch
❌ Wenn DU etwas empfiehlst — erst wenn er bestätigt

NUTZERPROFIL:
- Name: ${p.name}
- Alter: ${p.age} Jahre · Gewicht: ${p.weight} kg · Größe: ${p.height} cm
- Geschlecht: ${p.sex === 'm' ? 'männlich' : 'weiblich'}
- Aktivität: ${activityLabel}
- Ziel: ${goalLabel}
- Ernährung: ${dietLabel}

HEUTE:
- Ziel: ${goalKcal} kcal · ${pGoal}g E · ${cGoal}g KH · ${fGoal}g F
- Verzehrt: ${state.consumed.kcal} kcal · ${Math.round(state.consumed.p)}g E · ${Math.round(state.consumed.c)}g KH · ${Math.round(state.consumed.f)}g F
- ${remaining > 0 ? `Noch ${remaining} kcal verfügbar` : `${Math.abs(remaining)} kcal über dem Ziel`}

HEUTE GEGESSEN:
${logText}

VERFÜGBARE REZEPTE:
${recipeList}

REGELN:
1. Bei Rezeptempfehlungen: EXAKTER Name in Anführungszeichen.
2. Bei "was soll ich essen?": fehlende Makros analysieren, EIN konkretes Rezept vorschlagen.
3. Wenn der Nutzer sagt, dass er etwas gegessen hat: NUTZE log_food und bestätige im Text.
4. Bei emotionalen Themen: Empathie zuerst, Zahlen danach.`;
}

// ============================================================
// LLAMADA A LA API
// ============================================================
/**
 * @returns {Promise<{text: string, foodsLogged: Array}>}
 */
export async function askBaly(userMessage, history, state, lang) {
  if (!ANTHROPIC_API_KEY || ANTHROPIC_API_KEY.includes('PEGA-TU-KEY')) {
    throw new Error(
      lang === 'es'
        ? 'Falta configurar la API key (revisa .env o EAS Secrets)'
        : 'API-Key fehlt (prüfe .env oder EAS Secrets)'
    );
  }

  const systemPrompt = buildSystemPrompt(state, lang);

  const messages = history
    .filter(b => b.from === 'user' || b.from === 'baly')
    .map(b => ({
      role: b.from === 'user' ? 'user' : 'assistant',
      content: b.text,
    }));

  messages.push({ role: 'user', content: userMessage });

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: BALY_MODEL,
      max_tokens: 600,
      system: systemPrompt,
      tools: TOOLS,
      messages,
    }),
  });

  if (!response.ok) {
    let errText;
    try {
      const errJson = await response.json();
      errText = errJson?.error?.message || JSON.stringify(errJson);
    } catch {
      errText = await response.text();
    }
    throw new Error(`API ${response.status}: ${errText}`);
  }

  const data = await response.json();

  // Parsear todos los bloques de contenido — Claude puede devolver
  // texto Y tool_use juntos en la misma respuesta.
  let text = '';
  const foodsLogged = [];

  for (const block of data.content || []) {
    if (block.type === 'text') {
      text += block.text;
    } else if (block.type === 'tool_use' && block.name === 'log_food') {
      foodsLogged.push(block.input);
    }
  }

  // Fallback: si Baly solo llamó al tool sin escribir texto, generamos uno
  if (!text && foodsLogged.length > 0) {
    const items = foodsLogged.map(f => `${f.name} (${f.kcal} kcal)`).join(', ');
    text = lang === 'es'
      ? `✓ Anoté: ${items}`
      : `✓ Eingetragen: ${items}`;
  }

  return { text, foodsLogged };
}

// ============================================================
// ANÁLISIS DE FOTOS — Visión por cámara
// ============================================================
/**
 * Analiza una foto de comida y registra los alimentos detectados.
 *
 * @param {string} base64Image - Imagen en base64 (sin el prefijo data:image/...)
 * @param {string} mediaType   - 'image/jpeg' o 'image/png'
 * @param {Object} state       - Estado completo de la app
 * @param {string} lang        - 'es' o 'de'
 * @returns {Promise<{text: string, foodsLogged: Array}>}
 */
export async function analyzePhoto(base64Image, mediaType, state, lang) {
  if (!ANTHROPIC_API_KEY || ANTHROPIC_API_KEY.includes('PEGA-TU-KEY')) {
    throw new Error(
      lang === 'es'
        ? 'Falta configurar la API key (revisa .env o EAS Secrets)'
        : 'API-Key fehlt (prüfe .env oder EAS Secrets)'
    );
  }

  const p = state.profile;
  const goalKcal = calcGoal(p);
  const remaining = goalKcal - state.consumed.kcal;

  const visionSystemPrompt = lang === 'es'
    ? `Sos Baly, un coach nutricional con visión. El usuario te manda una foto de comida.

TAREA:
1. Identificá los alimentos/platos visibles. Estimá las porciones (tamaño de plato, cantidad visible).
2. Estimá kcal y macros con tu mejor criterio basándote en porciones normales.
3. LLAMÁ A log_food para CADA alimento principal visible (o una sola llamada combinada si el plato es uno solo).
4. Después en texto, en máximo 2-3 oraciones cortas, explicá qué viste y confirmá el total anotado.
5. Si la foto NO muestra comida (o no podés identificar nada claro), NO uses log_food. Decí en texto que no podés analizarla y pedí otra foto con más claridad.

CONTEXTO DEL USUARIO:
- Meta: ${goalKcal} kcal/día · Ya consumió: ${state.consumed.kcal} kcal · Le quedan: ${remaining} kcal
- Objetivo: ${p.goal === 'lose' ? 'bajar peso' : p.goal === 'gain' ? 'subir masa' : 'mantener'}
- Dieta: ${p.diet}

Hablá en español argentino (vos), tono cálido y directo, sin moralizar.`
    : `Du bist Baly, ein Ernährungscoach mit Bildanalyse. Der Nutzer sendet dir ein Foto vom Essen.

AUFGABE:
1. Identifiziere die sichtbaren Speisen. Schätze die Portionsgrößen.
2. Schätze kcal und Makros nach bestem Wissen.
3. RUFE log_food für jede Hauptkomponente auf (oder einmal für ein einzelnes Gericht).
4. Erkläre danach in max. 2-3 kurzen Sätzen was du siehst und die gesamte Eintragung.
5. Wenn das Foto KEIN Essen zeigt, NUTZE log_food NICHT. Sag im Text, dass du es nicht analysieren kannst.

NUTZER-KONTEXT:
- Ziel: ${goalKcal} kcal/Tag · Bereits: ${state.consumed.kcal} kcal · Verbleibend: ${remaining} kcal
- Ziel: ${p.goal === 'lose' ? 'abnehmen' : p.goal === 'gain' ? 'zunehmen' : 'halten'}
- Ernährung: ${p.diet}

Sprich Deutsch, warm und direkt, ohne zu moralisieren.`;

  const userText = lang === 'es'
    ? 'Analizá esta foto de comida y registrala con log_food.'
    : 'Analysiere dieses Foto vom Essen und registriere es mit log_food.';

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: BALY_MODEL,
      max_tokens: 700,
      system: visionSystemPrompt,
      tools: TOOLS,
      messages: [{
        role: 'user',
        content: [
          {
            type: 'image',
            source: {
              type: 'base64',
              media_type: mediaType || 'image/jpeg',
              data: base64Image,
            },
          },
          { type: 'text', text: userText },
        ],
      }],
    }),
  });

  if (!response.ok) {
    let errText;
    try {
      const errJson = await response.json();
      errText = errJson?.error?.message || JSON.stringify(errJson);
    } catch {
      errText = await response.text();
    }
    throw new Error(`API ${response.status}: ${errText}`);
  }

  const data = await response.json();
  let text = '';
  const foodsLogged = [];

  for (const block of data.content || []) {
    if (block.type === 'text') {
      text += block.text;
    } else if (block.type === 'tool_use' && block.name === 'log_food') {
      foodsLogged.push(block.input);
    }
  }

  if (!text && foodsLogged.length > 0) {
    const items = foodsLogged.map(f => `${f.name} (${f.kcal} kcal)`).join(', ');
    text = lang === 'es' ? `✓ Anoté: ${items}` : `✓ Eingetragen: ${items}`;
  }

  return { text, foodsLogged };
}
