/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },

      colors: {
        brand: {
          primary: "var(--color-brand-primary)",
          secondary: "var(--color-brand-secondary)",
          soft: "var(--color-brand-soft)",
        },

        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
        },

        surface: {
          DEFAULT: "var(--color-surface-default)",
          muted: "var(--color-surface-muted)",
          dark: "var(--color-surface-dark)",
        },

        border: {
          DEFAULT: "var(--color-border-default)",
        },
      },

      fontSize: {
        hero: "var(--text-hero)",

        "title-section": "var(--text-title-section)",
        "title-card": "var(--text-title-card)",

        "body-lg": "var(--text-body-lg)",
        "body-md": "var(--text-body-md)",
        "body-sm": "var(--text-body-sm)",

        button: "var(--text-button)",
        "button-sm": "var(--text-button-sm)",
        label: "var(--text-label)",
        tag: "var(--text-tag)",
      },

      maxWidth: {
        container: "1200px",
      },
    },
  },

  plugins: [],
};
