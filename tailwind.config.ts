import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'text': {
          50: '#030f16',
          100: '#071e2c',
          200: '#0d3c59',
          300: '#145a85',
          400: '#1b78b1',
          500: '#2196de',
          600: '#4eabe4',
          700: '#7ac0eb',
          800: '#a6d5f2',
          900: '#d3eaf8',
          950: '#e9f4fc',
        },
        'primary-euro': {
          50: '#030e16',
          100: '#061d2d',
          200: '#0c395a',
          300: '#125687',
          400: '#1873b4',
          500: '#1f90e0',
          600: '#4ba6e7',
          700: '#78bced',
          800: '#a5d2f3',
          900: '#d2e9f9',
          950: '#e9f4fc',
        },
        'secondary-euro': {
          50: '#1a1700',
          100: '#332e00',
          200: '#665c00',
          300: '#998a00',
          400: '#ccb800',
          500: '#ffe500',
          600: '#ffeb33',
          700: '#fff066',
          800: '#fff599',
          900: '#fffacc',
          950: '#fffce5',
        },
        'accent-euro': {
          50: '#040e15',
          100: '#091c2a',
          200: '#123954',
          300: '#1b557e',
          400: '#2471a8',
          500: '#2d8dd2',
          600: '#57a4db',
          700: '#81bbe4',
          800: '#abd2ed',
          900: '#d5e8f6',
          950: '#eaf4fb',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        "ubuntu": ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config