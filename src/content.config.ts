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
     * Entry kind. Drives the Object column in the ledger and the primary
     * classification.
     *   note  — markdown body (default)
     *   image — one or more images
     *   video — a video (local file or YouTube)
     */
    type: z.enum(['note', 'image', 'video']).default('note'),

    /** Single image — path under /public or external URL. */
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    /** Image gallery. Each entry: { src, alt? }. Rendered after any video. */
    images: z
      .array(z.object({ src: z.string(), alt: z.string().optional() }))
      .optional(),

    /** Local video file under /public (e.g. /devlog/clip.mp4). */
    videoSrc: z.string().optional(),
    videoPoster: z.string().optional(),
    /** OR a YouTube video — ID (e.g. "jNQXAC9IVRw") or full URL. */
    video: z.string().optional(),
  }),
});

export const collections = { devlog };
