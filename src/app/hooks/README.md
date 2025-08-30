# 🪝 Hooks Personnalisés - FTC-W2-SALEM

Ce dossier contient tous les hooks personnalisés utilisés dans l'application pour centraliser la logique métier et améliorer la réutilisabilité du code.

## 📋 Liste des Hooks

### 🧭 `useNavigation`
**Fichier :** `useNavigation.ts`

Gère la logique de navigation, les menus déroulants et le scroll.

**Utilisation :**
```tsx
const {
  isMenuOpen,
  openDropdown,
  scrolled,
  dropdownRefs,
  setIsMenuOpen,
  scrollToSection,
  toggleDropdown,
  dropdownMenus
} = useNavigation();
```

**Retourne :**
- États : `isMenuOpen`, `openDropdown`, `openMobileDropdown`, `scrolled`
- Références : `dropdownRefs`
- Fonctions : `setIsMenuOpen`, `scrollToSection`, `toggleDropdown`, `toggleMobileDropdown`
- Données : `dropdownMenus`

---

### 🎭 `use3DAnimations`
**Fichier :** `use3DAnimations.ts`

Gère les animations 3D GSAP et les interactions de souris.

**Utilisation :**
```tsx
const { imageRef, handleMouseMove, handleMouseLeave } = use3DAnimations();
```

**Retourne :**
- `imageRef` : Référence vers l'élément image
- `handleMouseMove` : Gestionnaire de mouvement de souris
- `handleMouseLeave` : Gestionnaire de sortie de souris

---

### 📅 `useCalIntegration`
**Fichier :** `useCalIntegration.ts`

Initialise l'intégration Cal.com pour les rendez-vous.

**Utilisation :**
```tsx
useCalIntegration(); // Pas de retour, gère l'initialisation
```

---

### 🚀 `useScrollAnimation`
**Fichier :** `useScrollAnimation.ts`

Gère le scroll animé avec GSAP.

**Utilisation :**
```tsx
const { scrollToSection, scrollToSectionWithCallback } = useScrollAnimation();

// Scroll simple
scrollToSection('#section-id');

// Scroll avec callback
scrollToSectionWithCallback('#section-id', () => {
  console.log('Scroll terminé !');
});
```

**Retourne :**
- `scrollToSection(sectionId, duration?, ease?)` : Scroll vers une section
- `scrollToSectionWithCallback(sectionId, callback?, duration?)` : Scroll avec callback

---

### 📊 `useScrollProgress`
**Fichier :** `useScrollProgress.ts`

Gère la barre de progression du scroll.

**Utilisation :**
```tsx
const { scrollProgress, scrollProgressFormatted } = useScrollProgress();
```

**Retourne :**
- `scrollProgress` : Pourcentage de scroll (0-100)
- `scrollProgressFormatted` : Pourcentage arrondi

---

### 🖱️ `useCustomCursor`
**Fichier :** `useCustomCursor.ts`

Gère la position du curseur personnalisé.

**Utilisation :**
```tsx
const { cursorPosition, cursorPositionFormatted } = useCustomCursor();
```

**Retourne :**
- `cursorPosition` : Position exacte du curseur
- `cursorPositionFormatted` : Position arrondie du curseur

---

### 🗂️ `useTabs`
**Fichier :** `useTabs.ts`

Gère la navigation entre les onglets.

**Utilisation :**
```tsx
const { activeTab, changeTab, isTabActive, getActiveTabIndex } = useTabs(
  'default-tab',
  ['tab1', 'tab2', 'tab3']
);
```

**Retourne :**
- `activeTab` : Onglet actuellement actif
- `changeTab(newTab)` : Fonction pour changer d'onglet
- `isTabActive(tab)` : Vérifie si un onglet est actif
- `getActiveTabIndex()` : Index de l'onglet actif

---

### 🔄 `useToggle`
**Fichier :** `useToggle.ts`

Gère les états booléens avec toggle.

**Utilisation :**
```tsx
const { value, toggle, setValue, setTrue, setFalse, reset } = useToggle(false);
```

**Retourne :**
- `value` : Valeur actuelle
- `toggle()` : Bascule la valeur
- `setValue(newValue)` : Définit une valeur spécifique
- `setTrue()` : Force la valeur à `true`
- `setFalse()` : Force la valeur à `false`
- `reset()` : Remet la valeur initiale

---

### 🖼️ `useImageLoading`
**Fichier :** `useImageLoading.ts`

Gère le chargement des images avec skeleton.

**Utilisation :**
```tsx
const { isLoaded, handleImageLoad, resetLoading } = useImageLoading();
```

**Retourne :**
- `isLoaded` : Indique si l'image est chargée
- `handleImageLoad` : Fonction à appeler quand l'image est chargée
- `resetLoading` : Remet l'état de chargement à `false`

## 🚀 Avantages des Hooks Personnalisés

### ✅ **Réutilisabilité**
- Logique centralisée et réutilisable
- Évite la duplication de code
- Facilite la maintenance

### ✅ **Séparation des responsabilités**
- Composants UI vs logique métier
- Code plus lisible et maintenable
- Tests plus faciles à écrire

### ✅ **Performance**
- Optimisation des re-renders
- Gestion optimisée des effets
- Nettoyage automatique des écouteurs

### ✅ **TypeScript**
- Types bien définis
- IntelliSense complet
- Détection d'erreurs à la compilation

## 📝 Exemples d'Utilisation

### Dans un composant :
```tsx
import { useNavigation, useScrollAnimation } from '@/app/hooks';

const MyComponent = () => {
  const { scrollToSection } = useScrollAnimation();
  const { isMenuOpen, setIsMenuOpen } = useNavigation();

  return (
    <button onClick={() => scrollToSection('#section')}>
      Aller à la section
    </button>
  );
};
```

### Import depuis l'index :
```tsx
import { useNavigation, useScrollAnimation } from '@/app/components';
```

## 🔧 Ajout d'un Nouveau Hook

1. **Créer le fichier** dans `src/app/hooks/`
2. **Ajouter l'export** dans `src/app/hooks/index.ts`
3. **Documenter** le hook dans ce README
4. **Tester** le hook dans les composants

## 📚 Ressources

- [React Hooks Documentation](https://react.dev/reference/react/hooks)
- [Custom Hooks Best Practices](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [GSAP Documentation](https://greensock.com/docs/)
- [Framer Motion](https://www.framer.com/motion/)
