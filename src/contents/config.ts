import { defineCollection, z } from "astro:content";
import { glob} from "astro/loaders";

const blogCollection = defineCollection({
    loader: glob({pattern: "*.md", base: "src/contents/blog"}),
    schema: {
        title: z.string(),
        date: z.string(),
    }
});

export const collections = {
    blog: blogCollection,
};
