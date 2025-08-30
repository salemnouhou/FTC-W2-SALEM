/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

/**
 * Configuration Tailwind CSS personnalisée pour le projet FTC-W2-SALEM
 * 
 * Cette configuration étend Tailwind avec :
 * - Police personnalisée Plus Jakarta Sans
 * - Système de couleurs sur mesure (primary, secondary, success)
 * - Classes de typographie responsive (12px à 72px)
 * - Utilitaires personnalisés pour les poids de police
 * - Support des composants Next.js et React
 */
const tailwindConfig = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        primary: { DEFAULT: "#7C5CFC", 100: "#E7DEFE", 200: "#CEBEFE", 300: "#B49DFE", 400: "#9F84FD", 500: "#7C5CFC", 600: "#5E43D8", 700: "#432EB5", 800: "#2D1D92", 900: "#1D1178" },
        secondary: { DEFAULT: "#1A202C", 100: "#E0E9F4", 200: "#C3D4E9", 300: "#90A3BF", 400: "#596780", 500: "#1A202C",600: "#131825", 700: "#0D121F", 800: "#080C19", 900: "#040815" },
        success: { DEFAULT: "#9CD323",100: "#F5FCD2", 200: "#E8FAA6", 300: "#D3F178", 400: "#BCE455", 500: "#9CD323",600:"#7FB519", 700:"", 800:"", 900: "#3B6506", 800: "#4C7A0B", 700: "#659711", 600: "#7FB519" },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const typography = [
        { weight: "regular", size: "12", line: "1.2" },
        { weight: "regular", size: "14", line: "1.4" },
        { weight: "regular", size: "16", line: "1.4" },
        { weight: "regular", size: "18", line: "1.4" },
        { weight: "regular", size: "20", line: "1.4" },
        { weight: "regular", size: "24", line: "1.2" },
        { weight: "regular", size: "32", line: "1.4" },
        { weight: "regular", size: "36", line: "1.2" },
        { weight: "regular", size: "40", line: "1.2" },
        { weight: "regular", size: "72", line: "1.1" },
        { weight: "medium", size: "12", line: "1.2" },
        { weight: "medium", size: "14", line: "1.4" },
        { weight: "medium", size: "16", line: "1.4" },
        { weight: "medium", size: "18", line: "1.4" },
        { weight: "medium", size: "20", line: "1.4" },
        { weight: "medium", size: "24", line: "1.2" },
        { weight: "medium", size: "32", line: "1.4" },
        { weight: "medium", size: "36", line: "1.2" },
        { weight: "medium", size: "40", line: "1.2" },
        { weight: "medium", size: "72", line: "1.1" },
        { weight: "bold", size: "12", line: "1.2" },
        { weight: "bold", size: "14", line: "1.4" },
        { weight: "bold", size: "16", line: "1.4" },
        { weight: "bold", size: "18", line: "1.4" },
        { weight: "bold", size: "20", line: "1.4" },
        { weight: "bold", size: "24", line: "1.2" },
        { weight: "bold", size: "32", line: "1.4" },
        { weight: "bold", size: "36", line: "1.2" },
        { weight: "bold", size: "40", line: "1.2" },
        { weight: "bold", size: "72", line: "1.1" },
      ];

      const utilities = {};
      typography.forEach(({ weight, size, line }) => {
        utilities[`.text-${weight}-${size}`] = {
          "font-weight": theme(`fontWeight.${weight}`),
          "font-size": `${size}px`,
          "line-height": line,
        };
      });
      addUtilities(utilities);
    }),
  ],
};

export default tailwindConfig;
