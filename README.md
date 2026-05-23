# Baly NutriBalance — React Native

Bilingual (ES/DE) nutrition app with green-drop mascot Baly. Ported from the HTML prototype.

## 1. Install dependencies

Solo necesitás **agregar una librería** a tu proyecto (las otras ya las tenías):

```bash
npm install react-native-svg
# o:
yarn add react-native-svg
```

Si estás en **Expo bare workflow** o **CLI puro**, después corré:

```bash
cd ios && pod install && cd ..
```

Si estás en **Expo managed**, no hace falta nada más.

Las otras dependencias (`react`, `react-native`, `@react-native-async-storage/async-storage`) ya las tenés en tu proyecto original.

## 2. Copiar los archivos

Pegá toda esta carpeta dentro de la raíz de tu proyecto RN (donde está tu `App.js` actual). **Va a sobreescribir tu `App.js`** — guardá una copia si querés conservar el original.

Estructura:

```
tu-proyecto/
├── App.js                 ← entry, ruteo + toast
├── theme.js               ← colores, fonts, sombras
├── strings.js             ← traducciones ES/DE
├── recipes.js             ← 18 recetas + calcGoal/scaleQty
├── storage.js             ← useAppState() hook + AsyncStorage
├── BottomNav.js           ← barra inferior
├── CalorieRing.js         ← anillo SVG animado
├── HomeScreen.js          ← pantalla principal
├── RecetarioScreen.js     ← grid de recetas con filtros
├── DetailScreen.js        ← receta paso a paso
├── CoachScreen.js         ← chat con Baly
├── PerfilScreen.js        ← perfil editable
└── assets/
    ├── baly-wave.png
    ├── baly-chef.png
    ├── baly-doctor.png
    ├── baly-phone.png
    ├── baly-heart.png
    └── baly-happy.png
```

## 3. Correr

```bash
npx react-native run-ios       # iOS
npx react-native run-android   # Android
# o si es Expo:
npx expo start
```

## ¿Qué funciona?

- **5 pantallas navegables**: Home, Recetario, Detalle de receta, Coach, Perfil
- **18 recetas bilingües** (9 argentinas + 9 alemanas), con ingredientes escalables por porción y tips de Baly en cada paso
- **Cálculo de meta** vía Mifflin-St Jeor (BMR × actividad ± ajuste por objetivo)
- **Macros 30/45/25** (P/C/F) en gramos
- **Persistencia** con AsyncStorage — al reabrir la app, todo sigue ahí
- **Reset automático** del log cuando cambia el día
- **Búsqueda en vivo** (mín. 2 caracteres) con resultados filtrados ES/DE
- **Toast feedback** en cada acción (agregar comida, deshacer, guardar perfil)
- **Switch de idioma ES/DE** desde Home o desde Perfil
- **Editar perfil completo** (nombre, peso, altura, edad, actividad, objetivo, dieta) — los cambios se reflejan en tiempo real (la avatar muestra la primera letra del nombre, la meta de calorías se recalcula sola)
- **Anillo animado** que cambia de color: verde → amarillo (>85%) → coral (>100%)
- **Filtros del recetario**: Todas, Argentinas, Alemanas, Rápidas (≤20min), Veggie, Bajas en cal (<250)
- **Confirmación nativa** (Alert.alert) para el reset del día

## Tuneo opcional — fonts custom

El diseño usa fuentes del sistema. Si querés los serifs de la maqueta HTML (Fraunces para títulos, Nunito para body), instalá `expo-font` o cargalas a mano:

```js
// App.js, antes del render:
import * as Font from 'expo-font';
await Font.loadAsync({
  'Fraunces': require('./assets/fonts/Fraunces.ttf'),
  'Nunito':   require('./assets/fonts/Nunito.ttf'),
});
```

Después en `theme.js`:

```js
export const FONTS = {
  display: 'Fraunces',
  body:    'Nunito',
};
```

Y donde quieras aplicarlas, agregá `fontFamily: FONTS.display` o `FONTS.body` en los estilos.

## Troubleshooting

- **"Unable to resolve module react-native-svg"** → corré `npm install react-native-svg` y reiniciá Metro (`npx react-native start --reset-cache`).
- **iOS no levanta tras instalar svg** → entrá a `ios/` y corré `pod install`.
- **Las mascotas no aparecen** → verificá que la carpeta `assets/` esté al mismo nivel que `App.js`, no adentro de `src/`.
- **El log no persiste** → revisá que `@react-native-async-storage/async-storage` esté instalado (`npm list @react-native-async-storage/async-storage`).
- **Texto cortado en pantallas chicas** → todos los textos largos tienen `numberOfLines` y `minWidth: 0` en los contenedores; si querés ajustar, está en los styles de cada screen.

## Estado inicial

Al primer arranque seedea 5 comidas de ejemplo (~930 kcal) para que veas el anillo en acción. Apretá el botón "Reiniciar día" en Perfil para empezar de cero.

## Próximos pasos sugeridos

1. **Coach con IA real** — reemplazar la respuesta canned en `CoachScreen.js` (el setTimeout que dice "te escucho 👀") por una llamada a Claude/GPT con el contexto del usuario.
2. **Cámara para escanear comida** — el botón "+" central del BottomNav hoy lleva al recetario; podría abrir la cámara con un modelo de visión.
3. **Onboarding** — primer arranque actualmente muestra "María Fernández" por default; agregar un wizard de bienvenida.
4. **Gráficos de progreso** — peso/calorías a través del tiempo (Victory Native o react-native-chart-kit).

---

Hecho con 💚 por Baly.
