import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

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

const contribution = z.object({
  led: z.array(z.string()).default([]),
  owned: z.array(z.string()).default([]),
  team: z.array(z.string()).default([]),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    period: z.string(),
    role: z.string(),
    audience: z.string(),
    summary: z.string(),
    thesis: z.string(),
    category: z.enum(['ai', 'business', 'infra', 'cross-platform']),
    context: z.string(),
    goals: z.array(z.string()).default([]),
    constraints: z.array(z.string()).default([]),
    flow: z.array(flowStep).default([]),
    decisions: z.array(decision).default([]),
    checks: z.array(z.string()).default([]),
    outcome: z.string(),
    responsibility: z.string(),
    contribution: contribution.default({ led: [], owned: [], team: [] }),
    stack: z.array(z.string()).default([]),
    metrics: z.array(z.string()).default([]),
    metricsNote: z.string().default(''),
    media: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
