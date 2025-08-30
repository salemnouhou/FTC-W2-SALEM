import { Hero,Benefits,HowItWorks,SuccessStories,Testimonials,Pricing, CtaSection, Footer } from "./components";

/**
 * Page d'accueil principale de l'application Spend.In
 * 
 * Structure de la page :
 * 1. Hero Section - En-tête avec navigation et titre principal
 * 2. Benefits - Avantages de la plateforme
 * 3. HowItWorks - Processus en 3 étapes
 * 4. SuccessStories - Témoignages de réussite
 * 5. Testimonials - Avis clients
 * 6. Pricing - Plans tarifaires
 * 7. CTA Section - Appel à l'action
 * 8. Footer - Pied de page
 * 
 * Tous les composants sont importés depuis le fichier index.tsx centralisé
 */
export default function Home() {
  return (
   <>
   {/* Section d'accueil avec navigation et titre principal */}
   <Hero/>
   
   {/* Contenu principal avec fond blanc et espacement */}
   <div className="bg-white py-12">
      {/* Section des avantages de la plateforme */}
      <Benefits/>
      
      {/* Section "Comment ça marche" en 3 étapes */}
      <HowItWorks/>
      
      {/* Section des histoires de succès */}
      <SuccessStories/>
      
      {/* Section des témoignages clients */}
      <Testimonials/>
      
      {/* Section des tarifs et plans */}
      <Pricing/>
      
      {/* Section d'appel à l'action */}
      <CtaSection/>
      
      {/* Pied de page avec liens et informations */}
      <Footer/>
   </div>
   </>
  );
}
