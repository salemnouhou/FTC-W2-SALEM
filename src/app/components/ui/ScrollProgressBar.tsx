"use client";
import { useScrollProgress } from '@/app/hooks';

/**
 * Composant ScrollProgressBar - Barre de progression du défilement
 * 
 * Affiche une barre de progression en haut de la page qui indique
 * le niveau de défilement actuel par rapport au contenu total
 */

export default function ScrollProgressBar() {
  // Utilisation du hook personnalisé pour la progression du scroll
  const { scrollProgress } = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-screen h-1 z-50">
      <div
        className="h-full bg-gradient-to-r from-primary-500 via-primary-400 to-primary-200 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
