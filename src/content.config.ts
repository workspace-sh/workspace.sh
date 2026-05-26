import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const devlog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/devlog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
    /**
     * Entry kind. Drives both the Object column in the ledger and how the
     * detail page renders.
     *   note  — markdown body (default)
     *   image — single image, body optional as caption
     *   video — YouTube embed, body optional as caption
     */
    type: z.enum(['note', 'image', 'video']).default('note'),
    /** Path under /public or external URL. */
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    /** YouTube video ID (e.g. "jNQXAC9IVRw") or full URL. */
    video: z.string().optional(),
  }),
});

export const collections = { devlog };
