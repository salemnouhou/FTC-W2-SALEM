"use client";
import { useState } from 'react';

/**
 * Hook personnalisé pour la gestion des onglets
 * 
 * Gère :
 * - L'onglet actif
 * - Le changement d'onglet
 * - La validation des onglets
 */
export const useTabs = <T extends string>(defaultTab: T, availableTabs: T[]) => {
  // État pour l'onglet actuellement sélectionné
  const [activeTab, setActiveTab] = useState<T>(defaultTab);

  /**
   * Fonction pour changer d'onglet
   * Vérifie que l'onglet est valide avant de le définir
   * 
   * @param newTab - Le nouvel onglet à activer
   */
  const changeTab = (newTab: T) => {
    if (availableTabs.includes(newTab)) {
      setActiveTab(newTab);
    } else {
      console.warn(`Onglet invalide: ${newTab}. Onglets disponibles:`, availableTabs);
    }
  };

  /**
   * Fonction pour vérifier si un onglet est actif
   * 
   * @param tab - L'onglet à vérifier
   * @returns true si l'onglet est actif
   */
  const isTabActive = (tab: T): boolean => {
    return activeTab === tab;
  };

  /**
   * Fonction pour obtenir l'index de l'onglet actif
   * 
   * @returns L'index de l'onglet actif dans la liste des onglets disponibles
   */
  const getActiveTabIndex = (): number => {
    return availableTabs.indexOf(activeTab);
  };

  return {
    activeTab,
    changeTab,
    isTabActive,
    getActiveTabIndex,
    availableTabs
  };
};
