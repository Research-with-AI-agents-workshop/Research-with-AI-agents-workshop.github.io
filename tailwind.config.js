/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "none"
          }
        }
      })
    }
  },
  daisyui: {
    themes: [
      {
        workshop: {
          ...require("daisyui/src/theming/themes")["corporate"],
          "primary": "#0891b2",
          "secondary": "#0d9488",
          "accent": "#6366f1",
          "neutral": "#1e293b",
          "base-100": "#ffffff",
          "base-200": "#f1f5f9",
          "base-300": "#e2e8f0"
        }
      }
    ],
    styled: true,
    base: true
  },
}
