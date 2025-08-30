// ========================================
// POINT D'ENTRÉE PRINCIPAL DES COMPOSANTS
// ========================================
// Ce fichier centralise l'exportation de tous les composants de l'application
// pour faciliter les imports et maintenir une structure claire

// ========================================
// COMPOSANTS DE MISE EN PAGE (LAYOUT)
// ========================================
// Composants principaux qui structurent les différentes sections de la page
export { default as Navbar } from "./ui/Navbar";           // Barre de navigation principale
export { default as Hero } from "./layout/Hero";           // Section d'accueil avec titre principal
export { default as Benefits } from "./layout/Benefits";   // Section des avantages de la plateforme
export { default as HowItWorks } from "./layout/HowItWorks"; // Section "Comment ça marche"
export { default as SuccessStories } from "./layout/SuccessStories"; // Témoignages de réussite
export { default as Testimonials } from "./layout/Testimonials"; // Avis clients
export { default as Pricing } from "./layout/Pricing";     // Section des tarifs
export { default as CtaSection } from "./layout/CtaSection"; // Section d'appel à l'action
export { default as Footer } from "./layout/Footer";       // Pied de page

// ========================================
// COMPOSANTS D'INTERFACE UTILISATEUR (UI)
// ========================================
// Composants réutilisables pour l'interface utilisateur
export { default as Button } from "./ui/Button";           // Boutons avec différentes variantes
export { default as ArrowDown } from "./ui/ArrowDown";     // Flèche vers le bas animée
export { default as HamburgerMenu } from "./ui/HamburgerMenu"; // Menu mobile hamburger
export { default as Logo } from "./ui/Logo";               // Logo de l'entreprise
export { default as Card } from "./ui/Card";               // Cartes avec effets 3D et parallaxe
export { default as LeftBenefit } from "./ui/LeftBenefit"; // Composant d'avantage avec image à gauche
export { default as ScrollProgressBar } from "./ui/ScrollProgressBar"; // Barre de progression du scroll
export { default as CustomCursor } from "./ui/CustomCursor"; // Curseur personnalisé pour l'UX

// ========================================
// COMPOSANTS SPÉCIALISÉS
// ========================================
// Composants avec des fonctionnalités spécifiques
export { ImageWithSkeleton } from "./ui/ImageWithSkeleton"; // Image avec skeleton loading
export { default as LeftSuccessStoris } from "./ui/LeftSuccessStoris"; // Histoires de succès avec image à gauche


