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
    tags: z
      .object({
        industry: z.array(z.string()).optional(),
        services: z.array(z.string()).optional(),
        technology: z.array(z.string()).optional(),
      })
      .optional(),
    sections: z
      .array(
        z.object({
          type: z.enum(["details", "image"]).optional(), // section type (optional)
          heading: z.string().optional(),
          content: z.string().optional(),
          description: z.string().optional(),
          image: z.string().optional(), // for type: "image"
          images: z.array(z.string()).optional(), // multiple images
          items: z
            .array(
              z.object({
                title: z.string().optional(),
                description: z.string().optional(),
                percentage: z.string().optional(), // for "The Impact" stats
              }),
            )
            .optional(),
        }),
      )
      .optional(),
  }),
});

export const collections = { our_work };
