import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-outfit)", "sans-serif"],
            },
            colors: {
                primary: {
                    DEFAULT: "#0F172A", // Slate 900
                    foreground: "#F8FAFC",
                },
                secondary: {
                    DEFAULT: "#F1F5F9", // Slate 100
                    foreground: "#0F172A",
                },
                accent: {
                    DEFAULT: "#D97706", // Amber 600
                    hover: "#B45309",
                },
                gold: {
                    500: "#EAB308", // Yellow 500
                    600: "#CA8A04", // Yellow 600
                },
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    "2xl": "1400px",
                },
            },
        },
    },
    plugins: [],
};
export default config;
