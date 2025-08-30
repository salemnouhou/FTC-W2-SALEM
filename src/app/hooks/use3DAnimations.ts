"use client";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

/**
 * Hook personnalisé pour les animations 3D avec GSAP
 * 
 * Gère :
 * - Les effets de rotation 3D sur les images
 * - Les interactions de souris (mouvement et sortie)
 * - Les animations de perspective et de transformation
 * - Le nettoyage des écouteurs d'événements
 */
export const use3DAnimations = () => {
  // Référence vers l'élément image pour les effets 3D
  const imageRef = useRef<HTMLDivElement>(null);

  /**
   * Gestionnaire de mouvement de la souris pour l'effet 3D
   * Calcule la position relative de la souris par rapport au centre de l'image
   * et applique une rotation 3D en temps réel
   */
  const handleMouseMove = (e: MouseEvent) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;   // Centre X de l'image
    const centerY = rect.top + rect.height / 2;   // Centre Y de l'image

    // Calcul des deltas pour la rotation (valeurs entre -1 et 1)
    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;

    // Animation GSAP pour la rotation 3D de l'image
    gsap.to(imageRef.current, {
      rotationY: deltaX * 10,        // Rotation Y basée sur la position X de la souris
      rotationX: -deltaY * 10,       // Rotation X basée sur la position Y de la souris
      transformPerspective: 1000,    // Perspective 3D pour un effet réaliste
      duration: 0.5,                 // Durée de l'animation
      ease: "power2.out"             // Courbe d'animation
    });
  };

  /**
   * Gestionnaire de sortie de la souris
   * Remet l'image dans sa position normale avec une animation fluide
   */
  const handleMouseLeave = () => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      rotationY: 0,                  // Remise à zéro de la rotation Y
      rotationX: 0,                  // Remise à zéro de la rotation X
      duration: 0.8,                 // Durée de retour à la normale
      ease: "power2.out"             // Courbe d'animation
    });
  };

  // Effet pour configurer les écouteurs d'événements 3D
  useEffect(() => {
    const imageElement = imageRef.current;
    
    if (imageElement) {
      // Ajout des écouteurs d'événements pour les interactions 3D
      imageElement.addEventListener('mousemove', handleMouseMove);
      imageElement.addEventListener('mouseleave', handleMouseLeave);

      // Nettoyage des écouteurs lors du démontage du composant
      return () => {
        imageElement.removeEventListener('mousemove', handleMouseMove);
        imageElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return {
    imageRef,
    handleMouseMove,
    handleMouseLeave
  };
};
