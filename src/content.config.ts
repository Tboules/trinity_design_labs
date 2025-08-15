import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const our_work = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/our-work" }),
  schema: z.object({
    slug: z.string(),
    hero: z.object({
      title: z.string(),
      sub_title: z.string().optional(),
      image: z.string(),
    }),
  }),
});

export const collections = { our_work };
