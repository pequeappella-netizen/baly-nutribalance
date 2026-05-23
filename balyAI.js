// balyAI.js — Conecta Baly con el cerebro real (API de Anthropic).
// Construye un system prompt con el contexto del usuario (perfil + consumo + log + recetas)
// y llama a la API de Claude.

import { ANTHROPIC_API_KEY, BALY_MODEL } from './config';
import { RECIPES, calcGoal } from './recipes';

const ENDPOINT = 'https://api.anthropic.com/v1/messages';

/**
 * Construye el system prompt con TODO el contexto del usuario.
 * Cuanto más contexto le damos, más útiles son las respuestas.
 */
function buildSystemPrompt(state, lang) {
  const p = state.profile;
  const goalKcal = calcGoal(p);
  const remaining = goalKcal - state.consumed.kcal;

  const pGoal = Math.round((goalKcal * 0.30) / 4);
  const cGoal = Math.round((goalKcal * 0.45) / 4);
  const fGoal = Math.round((goalKcal * 0.25) / 9);

  // Log de hoy en formato leíble
  const logText = state.log.length === 0
    ? (lang === 'es' ? '(nada todavía)' : '(noch nichts)')
    : state.log.map(e => {
        const r = RECIPES.find(x => x.id === e.recipeId);
        return r
          ? `- ${r.name[lang]} (${e.kcal} kcal)`
          : `- (${e.kcal} kcal)`;
      }).join('\n');

  // Lista compacta de recetas para que Baly pueda recomendarlas por nombre
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
- No sos médico. Para temas de salud serios (dolencias, enfermedades, medicación) decí: "Esto excede mi rol, hablalo con un profesional".
- NUNCA menciones que sos una IA, modelo de lenguaje, Anthropic o Claude. Sos Baly, un coach.

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

RECETAS DISPONIBLES EN LA APP (podés recomendarlas, todas tienen instrucciones paso a paso):
${recipeList}

REGLAS DURAS:
1. Si recomendás una receta, escribí el NOMBRE EXACTO entre comillas dobles, así el usuario puede buscarla.
2. Si te preguntan "¿qué como?" o similar, mirá las macros que le faltan y sugerí UNA receta concreta (no una lista).
3. Si está sobre la meta y quiere más, sugerí agua, té, o algo bajo en kcal (sauerkraut, mate, quark).
4. Si te preguntan algo no relacionado con nutrición/comida/bienestar, redirigí con calidez.
5. Si el usuario se ve angustiado o muy crítico consigo mismo, respondé con empatía primero, números después.`;
  }

  // German
  return `Du bist Baly, ein warmer, direkter und einfühlsamer Ernährungscoach. Du sprichst immer Deutsch (informell, du-Form).

PERSÖNLICHKEIT:
- Freundlich aber klar, ohne Pseudowissenschaft oder Moralisieren über Essen.
- KURZE Antworten (max. 3-4 Sätze — das ist ein Mobile-Chat).
- Wenn du etwas empfiehlst, benutze die EXAKTEN Rezeptnamen aus dem Kochbuch unten, in Anführungszeichen.
- Kein Urteil: der Nutzer darf essen was er will, du gibst nur Balance-Tipps.
- Du bist kein Arzt. Bei ernsten gesundheitlichen Themen (Krankheiten, Medikamente) sage: "Das übersteigt meine Rolle, sprich bitte mit einem Arzt."
- Erwähne NIEMALS, dass du eine KI, ein Sprachmodell, Anthropic oder Claude bist. Du bist Baly, ein Coach.

NUTZERPROFIL:
- Name: ${p.name}
- Alter: ${p.age} Jahre · Gewicht: ${p.weight} kg · Größe: ${p.height} cm
- Biologisches Geschlecht: ${p.sex === 'm' ? 'männlich' : 'weiblich'}
- Aktivitätsniveau: ${activityLabel}
- Ziel: ${goalLabel}
- Ernährung: ${dietLabel}

HEUTE:
- Tagesziel: ${goalKcal} kcal · ${pGoal}g Eiweiß · ${cGoal}g KH · ${fGoal}g Fett
- Verzehrt: ${state.consumed.kcal} kcal · ${Math.round(state.consumed.p)}g E · ${Math.round(state.consumed.c)}g KH · ${Math.round(state.consumed.f)}g F
- ${remaining > 0 ? `Noch ${remaining} kcal verfügbar` : `${Math.abs(remaining)} kcal über dem Ziel`}

HEUTE GEGESSEN:
${logText}

VERFÜGBARE REZEPTE IN DER APP (du kannst sie empfehlen, alle haben Schritt-für-Schritt-Anleitungen):
${recipeList}

HARTE REGELN:
1. Wenn du ein Rezept empfiehlst, schreib den EXAKTEN Namen in Anführungszeichen, damit der Nutzer es finden kann.
2. Bei "was soll ich essen?" oder ähnlich: schau auf die fehlenden Makros und schlage EIN konkretes Rezept vor (keine Liste).
3. Wenn der Nutzer über dem Ziel ist und mehr möchte, schlage Wasser, Tee oder etwas Kalorienarmes vor (Sauerkraut, Mate, Quark).
4. Bei Fragen die nichts mit Ernährung/Essen/Wohlbefinden zu tun haben, lenke freundlich um.
5. Wenn der Nutzer ängstlich oder sehr selbstkritisch klingt, antworte mit Empathie zuerst, Zahlen danach.`;
}

/**
 * Llama a la API de Claude con todo el contexto y devuelve la respuesta de Baly.
 *
 * @param {string} userMessage - El mensaje que acaba de escribir el usuario
 * @param {Array}  history     - Historial previo: array de {from, text}
 * @param {Object} state       - Estado completo de la app (perfil, consumido, log)
 * @param {string} lang        - 'es' o 'de'
 * @returns {Promise<string>}  - El texto de respuesta de Baly
 */
export async function askBaly(userMessage, history, state, lang) {
  if (!ANTHROPIC_API_KEY || ANTHROPIC_API_KEY.includes('PEGA-TU-KEY')) {
    throw new Error(
      lang === 'es'
        ? 'Falta configurar la API key en config.js'
        : 'API-Key in config.js fehlt'
    );
  }

  const systemPrompt = buildSystemPrompt(state, lang);

  // Convertimos el historial de bubbles al formato que espera la API
  const messages = history
    .filter(b => b.from === 'user' || b.from === 'baly')
    .map(b => ({
      role: b.from === 'user' ? 'user' : 'assistant',
      content: b.text,
    }));

  // El último mensaje siempre tiene que ser del usuario
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
      max_tokens: 400,
      system: systemPrompt,
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
  const text = data?.content?.[0]?.text;
  if (!text) {
    throw new Error('Respuesta inesperada de la API');
  }
  return text;
}
