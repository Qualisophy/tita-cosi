// tailwind.config.mjs
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        titacosi: {
          base: "#F9F8F6",
          surface: "#E8E3D9",
          primary: "#2A2A2A",
          accent: "#8C3B3B",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"Fraunces"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
};
