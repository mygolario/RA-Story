import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-vazir)",
        serif: "var(--font-vazir)", // Using Vazirmatn for consistent typography
      },
      colors: {
        nostalgia: {
          bg: "#F5F2EA", // Warm cream/beige
          gold: "#D4AF37", // Deep amber/gold
          wood: "#4A3728", // Dark brown
          green: "#2C3E2E", // Deep forest green
          sepia: "#8B7355", // Soft vintage overlay
          50: "#FAF9F5",
          100: "#F0ECE2",
          200: "#E2D9C8",
          300: "#D4AF37", // Matching gold
          400: "#B8860B", // Dark goldenrod
          500: "#8B4513", // Saddle brown
          600: "#4A3728", // Matching wood
          700: "#3D2B1F",
          800: "#2C3E2E", // Matching green
          900: "#1A251B",
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      backgroundImage: {
        'linear-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'linear-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'linear-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'linear-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
