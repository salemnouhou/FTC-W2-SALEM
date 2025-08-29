"use client";
import { useEffect, useState } from "react";

// CE COMPONENT EST UTILISE POUR AFFICHER UNE BARRE DE PROGRESSION DE DÉFILEMENT
// IL EST UTILISE POUR INDIQUER À L'UTILISATEUR LE NIVEAU DE DÉFILEMENT SUR LA PAGE
export default function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);

  // Utilisation de useEffect pour écouter l'événement de défilement
  // et mettre à jour la largeur de la barre de progression en fonction du défilement
  // La largeur est calculée en pourcentage par rapport à la hauteur totale du document
  // La barre de progression est un div avec une classe CSS pour le style
  // La largeur de la barre de progression est mise à jour en fonction du pourcentage de défilement
  // L'effet est nettoyé en supprimant l'écouteur d'événement lors du démontage du composant
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScroll(progress);
    };

    // Ajouter l'écouteur d'événement de défilement
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-1 z-50">
      <div
        className="h-full bg-gradient-to-r from-primary-500 via-primary-400 to-primary-200 transition-all duration-75"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
}
