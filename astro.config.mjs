// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react()],
	image: {
		domains: ["res.cloudinary.com"],
		service: passthroughImageService(),
	},
	site: "https://reyalka.pages.dev",
	output: "server",
	adapter: cloudflare(),
});
