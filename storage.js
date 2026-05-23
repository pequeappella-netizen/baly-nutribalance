// storage.js — App state management with AsyncStorage persistence.
// Exposes a single useAppState() hook that returns {state, actions}.

import { useState, useEffect, useCallback, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LS_KEY = '@baly-state-v1';

export const DEFAULT_PROFILE = {
  name: 'María Fernández',
  weight: 76.8,
  height: 168,
  age: 34,
  sex: 'f',         // 'm' | 'f' — used by Mifflin-St Jeor
  activity: 1.55,   // 1.2 sedentary | 1.55 moderate | 1.9 intense
  goal: 'maintain', // 'lose' | 'maintain' | 'gain'
  diet: 'omni',     // 'omni' | 'veg' | 'vegan'
  lang: 'es',       // 'es' | 'de'
};

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function freshDay() {
  return { kcal: 0, p: 0, c: 0, f: 0, water_ml: 1400 };
}

function recomputeConsumed(log) {
  const c = freshDay();
  for (const e of log) {
    c.kcal += e.kcal || 0;
    c.p += e.p || 0;
    c.c += e.c || 0;
    c.f += e.f || 0;
  }
  return c;
}

function seedState() {
  const now = Date.now();
  const log = [
    { ts: now - 9_000_000, recipeId: 'quark-beeren',     kcal: 135, p: 18, c: 12, f: 2 },
    { ts: now - 6_500_000, recipeId: 'empanada-salteña', kcal: 230, p: 18, c: 22, f: 8 },
    { ts: now - 3_500_000, recipeId: 'milanesa-horno',   kcal: 310, p: 32, c: 18, f: 12 },
    { ts: now - 1_500_000, recipeId: 'mate-naranja',     kcal: 15,  p: 0,  c: 3,  f: 0 },
    { ts: now -   300_000, recipeId: 'apfelstrudel',     kcal: 240, p: 4,  c: 38, f: 7 },
  ];
  return {
    version: 1,
    date: todayStr(),
    profile: { ...DEFAULT_PROFILE },
    streak: 12,
    log,
    consumed: recomputeConsumed(log),
  };
}

export function useAppState() {
  const [state, setState] = useState(null); // null until hydrated
  const stateRef = useRef(null);

  // Hydrate from AsyncStorage on mount
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(LS_KEY);
        if (raw) {
          const s = JSON.parse(raw);
          // Reset log if a new day
          if (s.date !== todayStr()) {
            s.date = todayStr();
            s.log = [];
          }
          // Migrate/fill missing keys
          s.profile = { ...DEFAULT_PROFILE, ...(s.profile || {}) };
          s.log = s.log || [];
          s.streak = s.streak ?? 12;
          s.consumed = recomputeConsumed(s.log);
          stateRef.current = s;
          setState(s);
        } else {
          const fresh = seedState();
          stateRef.current = fresh;
          setState(fresh);
          AsyncStorage.setItem(LS_KEY, JSON.stringify(fresh)).catch(() => {});
        }
      } catch (e) {
        const fresh = seedState();
        stateRef.current = fresh;
        setState(fresh);
      }
    })();
  }, []);

  // Helper: commit a new state and persist
  const commit = useCallback((next) => {
    stateRef.current = next;
    setState(next);
    AsyncStorage.setItem(LS_KEY, JSON.stringify(next)).catch(() => {});
  }, []);

  // ====== Actions ======
  const logFood = useCallback((item) => {
    const s = stateRef.current;
    if (!s) return;
    const newLog = [
      ...s.log,
      {
        ts: Date.now(),
        recipeId: item.id,
        kcal: item.kcal || 0,
        p: item.p || 0,
        c: item.c || 0,
        f: item.f || 0,
      },
    ];
    commit({ ...s, log: newLog, consumed: recomputeConsumed(newLog) });
  }, [commit]);

  const undoLast = useCallback(() => {
    const s = stateRef.current;
    if (!s || s.log.length === 0) return null;
    const newLog = s.log.slice(0, -1);
    const removed = s.log[s.log.length - 1];
    commit({ ...s, log: newLog, consumed: recomputeConsumed(newLog) });
    return removed;
  }, [commit]);

  const resetDay = useCallback(() => {
    const s = stateRef.current;
    if (!s) return;
    commit({ ...s, log: [], consumed: freshDay() });
  }, [commit]);

  const updateProfile = useCallback((patch) => {
    const s = stateRef.current;
    if (!s) return;
    commit({ ...s, profile: { ...s.profile, ...patch } });
  }, [commit]);

  const setLang = useCallback((lang) => {
    updateProfile({ lang });
  }, [updateProfile]);

  return {
    state,
    actions: { logFood, undoLast, resetDay, updateProfile, setLang },
  };
}
