"use client";
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Enregistrement du plugin GSAP pour le scroll animé
gsap.registerPlugin(ScrollToPlugin);

/**
 * Hook personnalisé pour la gestion de la navigation
 * 
 * Gère :
 * - L'état des menus (mobile et desktop)
 * - Les menus déroulants
 * - Le changement de style au scroll
 * - Le scroll animé vers les sections
 * - Les clics extérieurs
 */
export const useNavigation = () => {
  // États pour les menus et la navigation
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Références pour les menus déroulants
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Interface pour la fonction de scroll animé
  interface ScrollToSection {
    (sectionId: string): void;
  }

  /**
   * Fonction pour faire défiler la page vers une section spécifique
   * Utilise GSAP pour une animation fluide et contrôlée
   */
  const scrollToSection: ScrollToSection = (sectionId: string) => {
    gsap.to(window, { duration: 1.5, scrollTo: sectionId, ease: "power2.inOut" });
    setIsMenuOpen(false); // Ferme le menu mobile après le scroll
  };

  // Effet pour gérer le changement de style au scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effet pour gérer les clics extérieurs des menus déroulants
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && dropdownRefs.current[openDropdown] &&
          !dropdownRefs.current[openDropdown].contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  // Fonctions pour basculer les menus
  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const toggleMobileDropdown = (dropdownName: string) => {
    setOpenMobileDropdown(openMobileDropdown === dropdownName ? null : dropdownName);
  };

  // Données des menus déroulants
  const dropdownMenus = {
    products: [
      { label: 'Business expense', href: '#' },
      { label: 'Corporate cards', href: '#' },
      { label: 'Reporting tools', href: '#' },
      { label: 'Banking integrations', href: '#' }
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Our Team', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' }
    ]
  };

  return {
    // États
    isMenuOpen,
    openDropdown,
    openMobileDropdown,
    scrolled,
    
    // Références
    dropdownRefs,
    
    // Fonctions
    setIsMenuOpen,
    scrollToSection,
    toggleDropdown,
    toggleMobileDropdown,
    
    // Données
    dropdownMenus
  };
};
