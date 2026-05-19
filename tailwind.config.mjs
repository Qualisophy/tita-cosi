// tailwind.config.mjs
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Mantenemos tus colores originales para los componentes compartidos
        titacosi: {
          base: "#F9F8F6",
          surface: "#E8E3D9",
          primary: "#2A2A2A",
          accent: "#8C3B3B",
        },
        // Nueva paleta del sistema de diseño
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f4f3f1",
        "surface-container": "#efeeec",
        "surface-container-high": "#e9e8e6",
        "surface-container-highest": "#e3e2e0",
        surface: "#faf9f7",
        "surface-variant": "#e3e2e0",
        "surface-bright": "#faf9f7",
        "surface-dim": "#dadad8",
        primary: "#151616",
        "on-primary": "#ffffff",
        "primary-container": "#2a2a2a",
        "on-primary-container": "#929191",
        "primary-fixed": "#e4e2e1",
        "primary-fixed-dim": "#c8c6c5",
        secondary: "#615e56",
        "on-secondary": "#ffffff",
        "secondary-container": "#e7e2d8",
        "on-secondary-container": "#67645c",
        tertiary: "#360004",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#541114",
        "on-tertiary-container": "#d77574",
        "on-tertiary-fixed-variant": "#7a2d2e",
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        outline: "#747878",
        "outline-variant": "#c4c7c7",
        background: "#faf9f7",
        "on-background": "#1a1c1b",
        "on-surface": "#1a1c1b",
        "on-surface-variant": "#444748",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        "container-max": "1280px",
        "margin-desktop": "64px",
        base: "8px",
        "margin-mobile": "16px",
        gutter: "24px",
      },
      fontFamily: {
        // Mantenemos tus fuentes globales
        sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"Fraunces"', ...defaultTheme.fontFamily.serif],
        // Mapeamos las del diseño específico
        "headline-md": ["Newsreader", ...defaultTheme.fontFamily.serif],
        "body-lg": ["DM Sans", ...defaultTheme.fontFamily.sans],
        "headline-xl": ["Newsreader", ...defaultTheme.fontFamily.serif],
        "body-md": ["DM Sans", ...defaultTheme.fontFamily.sans],
        "label-sm": ["DM Sans", ...defaultTheme.fontFamily.sans],
        "headline-lg-mobile": ["Newsreader", ...defaultTheme.fontFamily.serif],
        "headline-lg": ["Newsreader", ...defaultTheme.fontFamily.serif],
        "label-md": ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "headline-xl": [
          "48px",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "headline-lg": [
          "36px",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "headline-lg-mobile": [
          "28px",
          { lineHeight: "1.2", fontWeight: "600" },
        ],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-md": [
          "14px",
          { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "500" },
        ],
        "label-sm": ["12px", { lineHeight: "1.2", fontWeight: "700" }],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
