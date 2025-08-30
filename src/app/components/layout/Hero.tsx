"use client";
import React, { useRef } from "react";
import Navbar from "../ui/Navbar";
import Button from "../ui/Button";
import DashboardHero from '@/assets/images/DashbardHero.svg';
import ScrollProgressBar from "../ui/ScrollProgressBar";
import { ImageWithSkeleton } from "../ui/ImageWithSkeleton";
import { motion } from "motion/react"
import { use3DAnimations, useCalIntegration, useScrollAnimation } from '@/app/hooks';

/**
 * Composant Hero - Section d'accueil principale
 * 
 * Ce composant gère :
 * - La navigation principale
 * - Les animations GSAP 3D sur l'image
 * - L'intégration Cal.com pour les rendez-vous
 * - Le scroll animé vers les sections
 * - Les animations d'entrée avec Framer Motion
 */
const Hero: React.FC = () => {
  // Référence vers la section hero
  const heroRef = useRef<HTMLElement>(null);

  // Utilisation des hooks personnalisés
  const { imageRef } = use3DAnimations();        // Animations 3D sur l'image
  useCalIntegration();                           // Intégration Cal.com
  const { scrollToSection } = useScrollAnimation(); // Scroll animé vers les sections

  return (
    // Section principale du hero avec fond sombre et débordement caché
    <section ref={heroRef} className="relative w-full bg-secondary-500 overflow-hidden flex flex-col">
      {/* Barre de navigation en haut */}
      <Navbar />
      
      {/* Barre de progression du scroll */}
      <ScrollProgressBar />

      {/* Contenu principal centré avec espacement et texte blanc */}
      <div className="flex flex-col items-center mt-24 justify-center text-white md:text-center space-y-[12px]">
        <div className="w-full px-4">
          {/* Titre principal avec animation d'entrée (version mobile) */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}           // État initial : invisible et décalé vers le haut
            animate={{ opacity: 1, y: 0 }}             // État final : visible et en position normale
            transition={{ duration: 0.4, delay: 0.2 }} // Animation de 0.4s avec délai de 0.2s
            className="md:hidden text-bold-36">      
            All your <br />
            business expenses <br />
            in one place.
          </motion.h1>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="hidden md:block text-bold-72">
          All your business <br /> expenses in one place.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" w-full px-4">
          <span className="md:hidden text-regular-14 text-secondary-300 ">
            Your one-stop finance empower platform. <br />
            Manage all your business expenses with our <br /> supafast app.
          </span>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block text-regular-24 text-secondary-300">
          <span className="">
            Your one-stop finance empower platform. <br />
            Manage all your business expenses with our supafast app.
          </span>
        </motion.div>

        {/* CTA */}
        <div className="w-full pt-8 px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Button
              calNamespace="talk-to-an-expert"
              calLink="optyven/talk-to-an-expert"
              calConfig={{ layout: "month_view" }}
              size="large" className="w-full z-10 md:max-w-[187px]" variant="primary" label="Get a Free Demo" />


            <Button
              onClick={() => scrollToSection("#pricing")} variant="minimal" className="w-full  w-full lg:bg-secondary-400/10 z-10 md:max-w-[187px] text-secondary-200 " size="large" label="See Pricing" />


          </div>
        </div>

        <div ref={imageRef} className="w-full  z-20  max-w-[1200px] 2xl:max-w-[1440px]    mt-20 px-4  md:pt-10 rounded-[3.73px]">
          <ImageWithSkeleton
            src={DashboardHero}
            alt="Dashboard Image"
            className="w-full h-auto   max-h-[852.86px] object-cover  rounded-[3.73px] lg:rounded-t-[11.79px]"
            priority
          />
        </div>
      </div>

      {/* Décors cercles */}
      <div className="xl:hidden absolute -top-[10px] -right-[640px] w-[914px] h-[914px] opacity-20">
        <svg className="pulse" width="328" height="228" viewBox="0 0 228 228" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.4" cx="227.5" cy="0.5" r="202.5" className="stroke-white" strokeWidth="50" />
        </svg>
      </div>

      <div className="xl:hidden absolute -bottom-[700px] -left-[40px] w-[914px] h-[914px] opacity-20">
        <svg className="pulse" width="328" height="228" viewBox="0 0 228 227" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.4" cx="0.5" cy="227.5" r="202.5" className="stroke-white" strokeWidth="50" />
        </svg>
      </div>

      <div className="hidden xl:block absolute -top-[60px] -right-[600px] w-[914px] h-[914px] opacity-20">
        <svg className="pulse" width="457" height="457" viewBox="0 0 457 457" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.4" cx="457" r="407" stroke="white" strokeWidth="100" />
        </svg>
      </div>

      <div className="hidden xl:block absolute -bottom-[600px] -left-[90px] w-[914px] h-[914px] opacity-20">
        <svg className="pulse" width="457" height="457" viewBox="0 0 457 457" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.4" cy="457" r="407" stroke="white" strokeWidth="100" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

