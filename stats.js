// stats.js — Calcula estadísticas reales desde el historial del usuario.
// Reemplaza los números hardcodeados (racha, días, recetas) por datos verdaderos.

import { RECIPES } from './recipes';

// Un día "cuenta" como en meta si las calorías están en una banda razonable del objetivo.
// Muy por debajo (< 60%) = probablemente no registró todo. Muy por encima (> 110%) = se pasó.
function isOnTarget(consumedKcal, goalKcal) {
  if (!goalKcal) return false;
  const ratio = consumedKcal / goalKcal;
  return ratio >= 0.6 && ratio <= 1.1;
}

// Racha: días consecutivos en meta, contando desde el día completo más reciente.
// No incluye HOY porque el día todavía no terminó (estarías "bajo meta" a media tarde).
export function computeStreak(state) {
  const history = state.history || [];
  let streak = 0;
  for (const day of history) {
    if (day.consumed && isOnTarget(day.consumed.kcal, day.goalKcal)) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

// Total de días activos (días con comida registrada).
export function computeActiveDays(state) {
  const history = state.history || [];
  const todayActive = (state.log && state.log.length > 0) ? 1 : 0;
  return history.length + todayActive;
}

// Total de recetas del recetario cocinadas (excluye comidas custom de Baly/foto).
export function computeRecipeCount(state) {
  const recipeIds = new Set(RECIPES.map(r => r.id));
  let count = 0;
  for (const e of (state.log || [])) {
    if (recipeIds.has(e.recipeId)) count++;
  }
  for (const day of (state.history || [])) {
    for (const e of (day.log || [])) {
      if (recipeIds.has(e.recipeId)) count++;
    }
  }
  return count;
}

// Días en meta dentro del historial.
export function computeDaysOnTarget(state) {
  const history = state.history || [];
  return history.filter(d => d.consumed && isOnTarget(d.consumed.kcal, d.goalKcal)).length;
}
