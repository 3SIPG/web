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
        'euro-text': {
          50: '#090d11',
          100: '#111922',
          200: '#223344',
          300: '#334c66',
          400: '#446688',
          500: '#557faa',
          600: '#7799bb',
          700: '#99b2cc',
          800: '#bbccdd',
          900: '#dde6ee',
          950: '#eef2f6',
        },
        'euro-primary': {
          50: '#000e1a',
          100: '#001b33',
          200: '#003666',
          300: '#005299',
          400: '#006dcc',
          500: '#0088ff',
          600: '#33a0ff',
          700: '#66b8ff',
          800: '#99cfff',
          900: '#cce7ff',
          950: '#e5f3ff',
        },
        'euro-secondary': {
          50: '#1a1800',
          100: '#333000',
          200: '#666100',
          300: '#999100',
          400: '#ccc200',
          500: '#fff200',
          600: '#fff533',
          700: '#fff766',
          800: '#fffa99',
          900: '#fffccc',
          950: '#fffee5',
        },
        'euro-accent': {
          50: '#000e19',
          100: '#011b32',
          200: '#023664',
          300: '#025197',
          400: '#036dc9',
          500: '#0488fb',
          600: '#36a0fc',
          700: '#68b7fd',
          800: '#9bcffd',
          900: '#cde7fe',
          950: '#e6f3ff',
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
        "space-grotesk": ['var(--font-space-grotesk)'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config