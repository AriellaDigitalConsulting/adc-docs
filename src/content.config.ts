import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// The description is required: it shows in search results and is the first thing the docs assistant reads
export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema({ extend: z.object({ description: z.string().min(1) }) }) }),
};
