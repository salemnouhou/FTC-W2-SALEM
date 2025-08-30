# FTC-W2-SALEM - Projet Figma to Code

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

## 🎯 Description du Projet

Ce projet est une application web moderne développée avec **Next.js 13+**, **TypeScript** et **Tailwind CSS**. Il s'agit d'une conversion d'un design Figma en code fonctionnel, présentant une landing page complète avec plusieurs sections :

- **Hero Section** : Section d'accueil principale
- **Benefits** : Présentation des avantages
- **How It Works** : Explication du processus
- **Pricing** : Plans et tarifs
- **Success Stories** : Témoignages de réussite
- **Testimonials** : Avis clients
- **CTA Section** : Appels à l'action
- **Footer** : Pied de page

## 🛠️ Technologies Utilisées

- **Framework** : Next.js 13+ (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Hooks personnalisés pour les animations 3D et scroll
- **Architecture** : Composants modulaires avec hooks personnalisés

## 🚀 Installation et Démarrage

```bash
# Cloner le projet
git clone [URL_DU_REPO]

# Installer les dépendances
npm install

# Démarrer en mode développement
npm run dev

# Build pour la production
npm run build

# Démarrer en mode production
npm start
```

## 📱 Fonctionnalités

- ✨ Animations 3D fluides
- 🎯 Curseur personnalisé
- 📱 Design responsive
- 🎨 Interface moderne et élégante
- ⚡ Performance optimisée
- 🔄 Animations au scroll
- 🖼️ Chargement d'images avec skeleton

## 🏗️ Architecture

Le projet suit une architecture modulaire avec :
- **Composants** organisés par fonction (layout, UI)
- **Hooks personnalisés** pour la logique métier
- **Types TypeScript** pour la sécurité du typage
- **Assets organisés** par section fonctionnelle

## 📝 Notes de Développement

- Utilisation de l'App Router de Next.js 13+
- Hooks personnalisés pour une meilleure réutilisabilité
- Composants UI modulaires et réutilisables
- Optimisation des performances avec le chargement d'images
- Animations fluides et accessibles
