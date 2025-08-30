"use client";
import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour la barre de progression du scroll
 * 
 * Gère :
 * - Le calcul du pourcentage de scroll
 * - La mise à jour en temps réel de la progression
 * - Le nettoyage des écouteurs d'événements
 */
export const useScrollProgress = () => {
  // État pour stocker le pourcentage de scroll (0-100)
  const [scrollProgress, setScrollProgress] = useState(0);

  // Effet pour écouter l'événement de défilement
  useEffect(() => {
    const handleScroll = () => {
      // Calcul du pourcentage de scroll
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      // Mise à jour de l'état avec le pourcentage calculé
      setScrollProgress(scrollPercent);
    };

    // Ajout de l'écouteur d'événement
    window.addEventListener('scroll', handleScroll);
    
    // Nettoyage de l'écouteur lors du démontage
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    scrollProgress,
    // Fonction utilitaire pour formater le pourcentage
    scrollProgressFormatted: Math.round(scrollProgress)
  };
};
