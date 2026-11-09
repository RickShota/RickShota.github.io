import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const flowStep = z.object({
  name: z.string(),
  detail: z.string(),
});

const decision = z.object({
  title: z.string(),
  problem: z.string(),
  choice: z.string(),
  benefit: z.string(),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    period: z.string(),
    summary: z.string(),
    thesis: z.string(),
    category: z.enum(['ai', 'business', 'infra', 'cross-platform']),
    context: z.string(),
    flow: z.array(flowStep).default([]),
    decisions: z.array(decision).default([]),
    checks: z.array(z.string()).default([]),
    outcome: z.string(),
    responsibility: z.string(),
    stack: z.array(z.string()).default([]),
    metrics: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

export const collections = { blog, projects };
