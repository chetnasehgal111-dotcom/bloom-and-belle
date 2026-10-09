import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: {
            DEFAULT: "#0E4D3F",
            dark: "#09362C",
            deep: "#06221C",
            light: "#166754",
            tint: "#E7F0ED",
          },
          gold: {
            DEFAULT: "#C8A35F",
            dark: "#A3803E",
            light: "#DFC38A",
            pale: "#F5EEDF",
            border: "#E2CCA0",
          },
          ivory: {
            DEFAULT: "#FCF9F4",
            cream: "#F5F0E7",
            sand: "#ECE3D4",
            dark: "#E3D7C3",
          },
          charcoal: {
            DEFAULT: "#202722",
            muted: "#5A655E",
            light: "#828E86",
          },
          blush: {
            DEFAULT: "#E8D6C2",
            rose: "#D6A6A6",
          },
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Montserrat'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(14, 77, 63, 0.05)",
        luxury: "0 10px 30px -5px rgba(14, 77, 63, 0.08), 0 0 1px 1px rgba(200, 163, 95, 0.15)",
        card: "0 2px 12px rgba(32, 39, 34, 0.04)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
