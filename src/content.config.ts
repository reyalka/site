import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "src/contents/blog" }),
	schema: z.object({
		title: z.string(),
		date: z.string().date(),
		published: z.boolean().default(false),
	}),
});

export const collections = { blog };
