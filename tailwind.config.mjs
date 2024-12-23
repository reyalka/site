/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"site-light-black": "#1D2735",
				"site-light-green": "#E3F2E8",
			},
		},
	},
	plugins: [],
};
