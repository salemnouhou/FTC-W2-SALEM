"use client";
import { useState, useCallback } from 'react';

/**
 * Hook personnalisé pour la gestion des toggles
 * 
 * Gère :
 * - L'état booléen
 * - Le basculement de l'état
 * - La définition explicite de l'état
 * - La réinitialisation à la valeur par défaut
 */
export const useToggle = (initialValue: boolean = false) => {
  // État booléen
  const [value, setValue] = useState<boolean>(initialValue);

  /**
   * Fonction pour basculer l'état (true ↔ false)
   */
  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  /**
   * Fonction pour définir explicitement l'état
   * 
   * @param newValue - La nouvelle valeur à définir
   */
  const setValueExplicit = useCallback((newValue: boolean) => {
    setValue(newValue);
  }, []);

  /**
   * Fonction pour forcer l'état à true
   */
  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  /**
   * Fonction pour forcer l'état à false
   */
  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  /**
   * Fonction pour réinitialiser à la valeur initiale
   */
  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return {
    value,
    toggle,
    setValue: setValueExplicit,
    setTrue,
    setFalse,
    reset
  };
};
