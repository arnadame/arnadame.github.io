import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const Projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string()
    })
  }),
});

const Blogs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blogs' }),
  schema: z.object({
    title: z.string(),
    description: z.string()
  }),
});


export const collections = { 
  Projects,
  Blogs
};