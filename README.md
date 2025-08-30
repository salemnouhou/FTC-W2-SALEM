# 🚀 FTC-W2-SALEM - Challenge Figma to Code Semaine 2

## 🎯 Contexte du Challenge
Ce projet a été réalisé dans le cadre du **Challenge Figma to Code - Semaine 2**, où l'objectif est de convertir au pixel perfect une maquette Figma en une application web fonctionnelle.

## 🖼️ Aperçu du Projet

![FTC-W2-SALEM Preview](src/assets/images/preview/preview.png)

*Interface principale de la plateforme Spend.In - Gestion des dépenses business*

## 📋 Description

**FTC-W2-SALEM** est une application web moderne et responsive construite avec Next.js 15, TypeScript et Tailwind CSS. Cette plateforme simule une solution de gestion des dépenses business appelée "Spend.In", offrant une interface utilisateur intuitive et des animations fluides pour la gestion des finances d'entreprise.

## ✨ Fonctionnalités Principales

### 🎯 Sections de l'Application
- **Hero Section** - Page d'accueil avec navigation et call-to-action
- **Benefits** - Présentation des avantages de la plateforme
- **How It Works** - Processus en 3 étapes pour utiliser la plateforme
- **Success Stories** - Témoignages et études de cas
- **Testimonials** - Avis clients
- **Pricing** - Plans tarifaires
- **CTA Section** - Section d'appel à l'action
- **Footer** - Pied de page avec liens et informations

### 🎨 Caractéristiques Techniques
- **Design Responsive** - Optimisé pour tous les appareils
- **Animations GSAP** - Transitions fluides et effets 3D
- **Parallax Effects** - Effets de profondeur avec react-parallax-tilt
- **Motion Animations** - Animations d'entrée avec Framer Motion
- **Custom Cursor** - Curseur personnalisé pour une meilleure UX
- **Scroll Progress Bar** - Barre de progression du scroll
- **Hamburger Menu** - Menu mobile responsive
- **Image Skeleton Loading** - Chargement progressif des images

## 🛠️ Technologies Utilisées

### Frontend
- **Next.js 15** - Framework React avec App Router
- **React 19** - Bibliothèque UI
- **TypeScript 5** - Typage statique
- **Tailwind CSS 3.4** - Framework CSS utilitaire
- **Framer Motion** - Animations React
- **GSAP** - Animations avancées et 3D

### UI/UX
- **Lucide React** - Icônes modernes
- **React Parallax Tilt** - Effets de parallaxe
- **Lottie React** - Animations vectorielles
- **CLSX** - Gestion conditionnelle des classes CSS

### Intégrations
- **Cal.com Embed** - Intégration de calendrier pour les rendez-vous

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone https://github.com/salemnouhou/FTC-W2-SALEM.git
cd FTC-W2-SALEM
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 📁 Structure du Projet


```
FTC-W2-SALEM/
├── 📄 Configuration
│   ├── package.json                 # Dépendances et scripts
│   ├── package-lock.json           # Verrouillage des versions
│   ├── tsconfig.json               # Configuration TypeScript
│   ├── next.config.ts              # Configuration Next.js
│   ├── tailwind.config.js          # Configuration Tailwind CSS
│   ├── postcss.config.js           # Configuration PostCSS
│   ├── eslint.config.mjs           # Configuration ESLint
│   └── next-env.d.ts              # Types Next.js
│
├── 🎨 Assets et Ressources
│   └── src/assets/
│       └── images/
│           ├── Benefits/            # Images des bénéfices
│           │   ├── BenefitOne.png
│           │   ├── BenefitOneTest.svg
│           │   ├── BenefitTwo.png
│           │   ├── BenefitTwoTest.svg
│           │   ├── BenefitThreeTest.png
│           │   ├── BenefitThreeTest.svg
│           │   ├── BenefitTree.png
│           │   └── Content.svg
│           ├── Cta/                 # Images call-to-action
│           │   └── CtaImage.svg
│           ├── HowItWorks/          # Images du processus
│           │   ├── workOne.svg
│           │   ├── workTwo.svg
│           │   ├── workTree.svg
│           │   ├── WorkTwoDown.png
│           │   ├── WorkTwoDown.svg
│           │   ├── WorkTwoLeft.svg
│           │   └── WorkTwoRight.svg
│           ├── successStories/      # Images des succès
│           │   ├── greenChart.svg
│           │   ├── redChart.svg
│           │   └── Vector.svg
│           ├── testimony/           # Images des témoignages
│           │   ├── firstTestimony.svg
│           │   ├── secondTestimony.svg
│           │   └── thirdTestimony.svg
│           ├── preview/             # Images de prévisualisation
│           │   └── preview.png
│           ├── Dashboard.svg        # Dashboard principal
│           ├── DashbardHero.svg     # Hero du dashboard
│           ├── dashboard.png        # Image du dashboard
│           ├── logoheader.png       # Logo de l'en-tête
│           ├── elipstopright.png    # Élipse décorative
│           └── elipsedownleft.png   # Élipse décorative
│
├── 🚀 Code Source
│   └── src/
│       ├── app/                     # Application Next.js 13+
│       │   ├── components/          # Composants React
│       │   │   ├── layout/          # Composants de mise en page
│       │   │   │   ├── Hero.tsx              # Section héro
│       │   │   │   ├── Benefits.tsx          # Section des bénéfices
│       │   │   │   ├── HowItWorks.tsx        # Section du processus
│       │   │   │   ├── Pricing.tsx           # Section des prix
│       │   │   │   ├── SuccessStories.tsx    # Section des succès
│       │   │   │   ├── Testimonials.tsx      # Section des témoignages
│       │   │   │   ├── CtaSection.tsx        # Section call-to-action
│       │   │   │   └── Footer.tsx            # Pied de page
│       │   │   ├── ui/              # Composants d'interface
│       │   │   │   ├── Button.tsx            # Bouton personnalisé
│       │   │   │   ├── Card.tsx              # Carte
│       │   │   │   ├── Navbar.tsx            # Barre de navigation
│       │   │   │   ├── Logo.tsx              # Logo
│       │   │   │   ├── HamburgerMenu.tsx     # Menu hamburger
│       │   │   │   ├── CustomCursor.tsx      # Curseur personnalisé
│       │   │   │   ├── ScrollProgressBar.tsx # Barre de progression
│       │   │   │   ├── ImageWithSkeleton.tsx # Image avec skeleton
│       │   │   │   ├── ArrowDown.tsx         # Flèche vers le bas
│       │   │   │   ├── LeftBenefit.tsx       # Bénéfice de gauche
│       │   │   │   └── LeftSuccessStoris.tsx # Succès de gauche
│       │   │   └── index.tsx                 # Export des composants
│       │   ├── hooks/               # Hooks React personnalisés
│       │   │   ├── use3DAnimations.ts        # Animations 3D
│       │   │   ├── useScrollAnimation.ts     # Animations au scroll
│       │   │   ├── useScrollProgress.ts      # Progression du scroll
│       │   │   ├── useCustomCursor.ts        # Curseur personnalisé
│       │   │   ├── useImageLoading.ts        # Chargement d'images
│       │   │   ├── useNavigation.ts          # Navigation
│       │   │   ├── useTabs.ts                # Gestion des onglets
│       │   │   ├── useToggle.ts              # État toggle
│       │   │   ├── useCalIntegration.ts      # Intégration Cal
│       │   │   ├── index.ts                  # Export des hooks
│       │   │   └── README.md                 # Documentation des hooks
│       │   ├── types/               # Types TypeScript
│       │   │   ├── Benefits.ts               # Types des bénéfices
│       │   │   ├── button.ts                 # Types des boutons
│       │   │   ├── card.ts                   # Types des cartes
│       │   │   ├── SuccessStories.ts         # Types des succès
│       │   │   ├── HamburgerMenu.ts          # Types du menu
│       │   │   ├── ImageSkeleton.ts          # Types du skeleton
│       │   │   └── index.ts                  # Export des types
│       │   ├── utils/               # Utilitaires
│       │   ├── globals.css          # Styles globaux
│       │   ├── layout.tsx           # Layout principal
│       │   ├── page.tsx             # Page d'accueil
│       │   └── favicon.ico          # Icône du site
│       └── public/                  # Fichiers publics
│           ├── file.svg
│           ├── globe.svg
│           ├── next.svg
│           ├── vercel.svg
│           └── window.svg
│
├── 📚 Documentation
│   ├── README.md                    # Ce fichier
│   └── .gitignore                   # Fichiers ignorés par Git
│
└── 🔧 Développement
    ├── .next/                       # Build Next.js
    ├── node_modules/                # Dépendances installées
    └── .git/                        # Historique Git
```

## 🎨 Design System

### Couleurs
- **Primary**: #7C5CFC (Violet principal)
- **Secondary**: #1A202C (Gris foncé)
- **Success**: #9CD323 (Vert succès)

### Typographie
- **Font Family**: Plus Jakarta Sans
- **Poids**: Regular (400), Medium (500), SemiBold (600), Bold (700)
- **Tailles**: 12px à 72px avec line-height optimisé

### Composants UI
- **Button** - Boutons avec variantes multiples
- **Card** - Cartes avec effets 3D et parallaxe
- **Navbar** - Navigation responsive
- **CustomCursor** - Curseur personnalisé
- **ScrollProgressBar** - Barre de progression du scroll

## 🚀 Scripts Disponibles

```json
{
  "dev": "next dev",           // Serveur de développement
  "build": "npm install --legacy-peer-deps && next build",  // Build de production
  "start": "next start",        // Serveur de production
  "lint": "eslint"             // Vérification du code
}
```

## 📱 Responsive Design

L'application est entièrement responsive avec des breakpoints optimisés :
- **Mobile First** - Design mobile-first
- **Tablet** - Adaptations pour tablettes
- **Desktop** - Expérience optimisée pour ordinateurs
- **Large Screens** - Support des écrans 4K

## 🎭 Animations et Interactions

### GSAP Animations
- Effets 3D sur les images (rotation au survol)
- Animations de scroll fluides
- Transitions de page

### Framer Motion
- Animations d'entrée des composants
- Effets de parallaxe
- Transitions fluides

### Effets Interactifs
- Tilt 3D sur les cartes
- Curseur personnalisé
- Barre de progression du scroll
- Menu hamburger animé

## 🪝 Hooks Personnalisés

L'application utilise des hooks personnalisés pour centraliser la logique métier :

- **`useNavigation`** - Gestion des menus et navigation
- **`use3DAnimations`** - Animations GSAP 3D
- **`useCalIntegration`** - Intégration Cal.com
- **`useScrollAnimation`** - Scroll animé avec GSAP
- **`useScrollProgress`** - Barre de progression du scroll
- **`useCustomCursor`** - Curseur personnalisé
- **`useTabs`** - Gestion des onglets
- **`useToggle`** - États booléens avec toggle
- **`useImageLoading`** - Chargement d'images avec skeleton

Voir `src/app/hooks/README.md` pour la documentation complète.

## 🔧 Configuration

### Tailwind CSS
Configuration personnalisée avec :
- Système de couleurs sur mesure
- Typographie responsive
- Utilitaires personnalisés
- Plugins d'extension

### TypeScript
- Configuration stricte
- Types personnalisés pour tous les composants
- Interfaces bien définies

### ESLint
- Configuration Next.js
- Règles de qualité du code
- Support TypeScript

## 📈 Performance

- **Lazy Loading** des images
- **Code Splitting** automatique avec Next.js
- **Optimisation des assets** SVG et PNG
- **Animations optimisées** avec GSAP et Framer Motion

## 🌟 Fonctionnalités Avancées

- **Intégration Cal.com** pour la prise de rendez-vous
- **Système de thème** avec variables CSS
- **Gestion d'état** optimisée
- **Accessibilité** améliorée
- **SEO** optimisé avec Next.js

## 🤝 Contribution

Ce projet fait partie du programme "Figma to Code" - Semaine 2, démontrant la conversion d'un design Figma en code fonctionnel avec les technologies modernes.

## 📄 Licence

Projet privé - Tous droits réservés

---

**Développé avec ❤️ en utilisant Next.js, TypeScript et Tailwind CSS**





