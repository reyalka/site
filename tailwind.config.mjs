import plugin from "tailwindcss/plugin";
import TailwindTypography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"site-light-black": {
					DEFAULT: "#1D2735",
					50: "#F9FAFB",
					100: "#F3F4F6",
					200: "#E5E7EB",
					300: "#D1D5DB",
					400: "#9CA3AF",
					500: "#6B7280",
					600: "#4B5563",
					700: "#374151",
					800: "#1F2937",
					900: "#111827",
				},
				"site-light-green": "#E3F2E8",
			},
			animation: {
				shake: "shake 1s linear infinite",
				"big-small": "big-small 0.3s infinte",
			},
			keyframes: {
				shake: {
					"0%, 100%": { transform: "translateY(0)" },
					"33%": { transform: "translateY(-2px)" },
					"67%": { transform: "translateY(2px)" },
				},
				"big-small": {
					"0%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.1)" },
					"100%": { transform: "scale(1.05)" },
				},
			},
			textShadow: {
				sm: "0 1px 2px var(--tw-shadow-color)",
				DEFAULT: "0 2px 4px var(--tw-shadow-color)",
				md: "0 4px 8px var(--tw-shadow-color)",
				lg: "0 8px 16px var(--tw-shadow-color)",
			},
		},
	},
	plugins: [
		TailwindTypography,
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					"text-shadow": (value) => ({
						textShadow: value,
					}),
				},
				{
					values: theme("textShadow"),
				},
			);
		}),
	],
};
