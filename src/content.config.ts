import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { fetchZennArticles } from "./utils/zenn";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "src/contents/blog" }),
	schema: z.object({
		title: z.string(),
		date: z.string().date(),
		published: z.boolean().default(false),
	}),
});

const zenn = defineCollection({
	loader: async () => {
		const data = await fetchZennArticles();
		return data.map((item) => ({
			id: item.link,
			...item,
		}));
	},
	schema: z.object({
		link: z.string().url(),
		title: z.string(),
		description: z.string(),
		rawDate: z.string(),
		date: z.string().date(),
		ogUrl: z.string().url(),
	}),
});

export const collections = { blog, zenn };
