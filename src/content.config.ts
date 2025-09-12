import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const sectionItemSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  percentage: z.string().optional(), // for stats (The Impact)
});

const sectionSchema = z.object({
  type: z.enum(["details", "image"]).optional(), // section type
  heading: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(), // single image
  images: z.array(z.string()).optional(), // multiple images
  items: z.array(sectionItemSchema).optional(),
});

const our_work = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/our-work" }),
  schema: z.object({
    slug: z.string(),
    hero: z.object({
      title: z.string(),
      sub_title: z.string().optional(),
      card_title: z.string(),
      card_description: z.string(),
      image: z.string(),
    }),
    tags: z
      .object({
        industry: z.array(z.string()).optional(),
        services: z.array(z.string()).optional(),
        technology: z.array(z.string()).optional(),
        category: z.array(z.string()).optional(),
      })
      .optional(),
    projectBrief: z.string().optional(),
    keyChallenges: z.string().optional(),

    // ✅ sectionOne is now an object with cardOne..cardFive
    sectionOne: z
      .object({
        cardOne: sectionSchema.optional(),
        cardTwo: sectionSchema.optional(),
        cardThree: sectionSchema.optional(),
        cardFour: sectionSchema.optional(),
        cardFive: sectionSchema.optional(),
      })
      .optional(),

    sectionTwo: z
      .array(
        z.object({
          heading: z.string(),
          paragraph: z.string().optional(),
          items: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          ),
        }),
      )
      .optional(),

    sectionThree: z
      .array(
        z.object({
          heading: z.string(),
          description: z.string().optional(),
          items: z
            .array(
              z.object({
                percentage: z.string().optional(),
                title: z.string().optional(),
              }),
            )
            .optional(),
          images: z.array(z.string()).optional(),
        }),
      )
      .optional(),
  }),
});

export const collections = { our_work };
