// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react(), sitemap()],
	image: {
		domains: ["res.cloudinary.com"],
	},
	site: "https://reyalka.pages.dev",
	output: "server",
	adapter: cloudflare(),
});
