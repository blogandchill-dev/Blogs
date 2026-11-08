import { z } from 'zod';

// Post body = ordered blocks. The web renderer and the pinmaker both read this shape.
export const ImageSlot = z.object({
  type: z.literal('image_slot'),
  prompt: z.string().describe('Generation prompt: a real, specific space in natural light; include dimensions and the exact items mentioned in the text'),
  alt: z.string().describe('Alt text a screen reader would want: what is in the picture, no keyword stuffing'),
  caption: z.string().nullable(),
});

export const Block = z.discriminatedUnion('type', [
  z.object({ type: z.literal('h2'), text: z.string() }),
  z.object({ type: z.literal('h3'), text: z.string() }),
  z.object({ type: z.literal('p'), text: z.string() }),
  z.object({ type: z.literal('list'), ordered: z.boolean(), items: z.array(z.string()) }),
  z.object({ type: z.literal('callout'), label: z.string(), text: z.string() }),
  ImageSlot,
]);
export type Block = z.infer<typeof Block>;

export const Outline = z.object({
  title: z.string().describe('Final H1. Must contain the target keyword naturally; for ideas posts, a number and the space'),
  slug_hint: z.string().describe('3-6 lowercase words, hyphenated, no stopwords, keyword first'),
  search_intent: z.string().describe('One sentence: what the person typing this phrase actually wants to see'),
  opening_verdict: z.string().describe('The one-line verdict that opens the post'),
  sections: z.array(z.object({
    heading: z.string(),
    angle: z.string().describe('What this section says that no other section does'),
    must_include: z.array(z.string()).describe('Specifics: a dimension, a price range, a condition, a thing to skip'),
    image: z.boolean(),
  })).min(3),
  skip_section: z.array(z.string()).describe('Things to tell the reader not to bother with, for the closing section').nullable(),
  faq: z.array(z.object({ q: z.string(), a_hint: z.string() })).max(4),
});
export type Outline = z.infer<typeof Outline>;

export const Draft = z.object({
  title: z.string(),
  excerpt: z.string().describe('One or two sentences for the listing card and meta description, under 160 characters'),
  blocks: z.array(Block).min(8),
});
export type Draft = z.infer<typeof Draft>;

export const StyleReport = z.object({
  score: z.number().int().min(0).max(100).describe('How closely the draft follows the voice profile. 90+ publishable as-is; under 75 needs a rewrite'),
  banned_words_found: z.array(z.string()),
  violations: z.array(z.object({
    rule: z.string(),
    quote: z.string().describe('The offending text, verbatim'),
    fix: z.string(),
  })),
  missing: z.array(z.string()).describe('Standing opinions or required elements the draft skipped (dimensions, budget-first, rental-friendly, what to skip)'),
  verdict: z.enum(['publish', 'rewrite', 'flag']),
});
export type StyleReport = z.infer<typeof StyleReport>;

export function wordCount(blocks: Block[]): number {
  return blocks.reduce((n, b) => {
    if (b.type === 'p' || b.type === 'h2' || b.type === 'h3') return n + b.text.split(/\s+/).length;
    if (b.type === 'list') return n + b.items.join(' ').split(/\s+/).length;
    if (b.type === 'callout') return n + b.text.split(/\s+/).length;
    return n;
  }, 0);
}

export function plainText(blocks: Block[]): string {
  return blocks.map(b => {
    switch (b.type) {
      case 'h2': return `## ${b.text}`;
      case 'h3': return `### ${b.text}`;
      case 'p': return b.text;
      case 'list': return b.items.map((i, k) => (b.ordered ? `${k + 1}. ` : '- ') + i).join('\n');
      case 'callout': return `> ${b.label}: ${b.text}`;
      case 'image_slot': return `[image: ${b.alt}]`;
    }
  }).join('\n\n');
}
