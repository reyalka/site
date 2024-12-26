/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"site-light-black": "#1D2735",
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
		},
	},
	plugins: [],
};
