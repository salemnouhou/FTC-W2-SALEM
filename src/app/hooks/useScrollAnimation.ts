import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Enregistrement du plugin GSAP pour le scroll animé
gsap.registerPlugin(ScrollToPlugin);

/**
 * Hook personnalisé pour le scroll animé avec GSAP
 * 
 * Gère :
 * - Le scroll fluide vers les sections
 * - Les animations de défilement personnalisées
 * - La configuration des paramètres d'animation
 */
export const useScrollAnimation = () => {
  // Interface pour la fonction de scroll animé
  interface ScrollToSection {
    (sectionId: string): void;
  }

  /**
   * Fonction pour faire défiler la page vers une section spécifique
   * Utilise GSAP pour une animation fluide et contrôlée
   * 
   * @param sectionId - L'ID de la section cible
   * @param duration - Durée de l'animation (optionnel, défaut: 1.5s)
   * @param ease - Courbe d'animation (optionnel, défaut: "power2.inOut")
   */
  const scrollToSection: ScrollToSection = (
    sectionId: string, 
    duration: number = 1.5, 
    ease: string = "power2.inOut"
  ) => {
    gsap.to(window, { 
      duration, 
      scrollTo: sectionId, 
      ease 
    });
  };

  /**
   * Fonction pour faire défiler vers une section avec callback
   * Utile pour exécuter des actions après le scroll
   * 
   * @param sectionId - L'ID de la section cible
   * @param callback - Fonction à exécuter après le scroll
   * @param duration - Durée de l'animation
   */
  const scrollToSectionWithCallback = (
    sectionId: string, 
    callback?: () => void, 
    duration: number = 1.5
  ) => {
    gsap.to(window, { 
      duration, 
      scrollTo: sectionId, 
      ease: "power2.inOut",
      onComplete: callback
    });
  };

  return {
    scrollToSection,
    scrollToSectionWithCallback
  };
};
