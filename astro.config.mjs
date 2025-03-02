// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import rehypeRaw from "rehype-raw"
import rehypeExternalLinks from "rehype-external-links"

export default defineConfig({
	integrations: [tailwind(), react(), sitemap()],
	image: {
		domains: ["res.cloudinary.com"],
	},
	site: "https://reyalka.pages.dev",
	output: "server",
	adapter: cloudflare(),
	markdown: {
		rehypePlugins: [
			rehypeRaw,
			[rehypeExternalLinks, { target: "_blank" }]
		],
	}
});
