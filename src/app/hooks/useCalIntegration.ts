"use client";
import { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

/**
 * Hook personnalisé pour l'intégration Cal.com
 * 
 * Gère :
 * - L'initialisation de l'API Cal.com
 * - La configuration du calendrier de rendez-vous
 * - L'intégration dans l'interface utilisateur
 */
export const useCalIntegration = () => {
  // Effet pour initialiser l'intégration Cal.com (calendrier de rendez-vous)
  useEffect(() => {
    const initializeCal = async () => {
      try {
        const cal = await getCalApi({ namespace: "talk-to-an-expert" });
        cal("ui", { 
          hideEventTypeDetails: false, 
          layout: "month_view", 
          theme: "dark" 
        });
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de Cal.com:', error);
      }
    };

    initializeCal();
  }, []);

  return {
    // Le hook ne retourne rien car il gère uniquement l'initialisation
    // Les fonctionnalités Cal.com sont intégrées directement dans l'UI
  };
};
