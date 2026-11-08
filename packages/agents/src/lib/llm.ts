import Anthropic from '@anthropic-ai/sdk';
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod';
import type { z } from 'zod';

export const MODEL = process.env.WRITER_MODEL ?? 'claude-opus-5-5';

// $/MTok for claude-opus-5-5. Cache reads are ~5% of input price.
const PRICE = { input: 4, output: 20, cacheWrite: 5, cacheRead: 0.2 };

const client = new Anthropic();

export type Effort = 'low' | 'medium' | 'high' | 'xhigh';

/** Running token/cost tally for one job run; the job writes it to job_runs.notes. */
export class Meter {
  input = 0; output = 0; cacheWrite = 0; cacheRead = 0; calls = 0;
  add(u: Anthropic.Usage) {
    this.calls++;
    this.input += u.input_tokens;
    this.output += u.output_tokens;
    this.cacheWrite += u.cache_creation_input_tokens ?? 0;
    this.cacheRead += u.cache_read_input_tokens ?? 0;
  }
  get usd() {
    return (this.input * PRICE.input + this.output * PRICE.output
      + this.cacheWrite * PRICE.cacheWrite + this.cacheRead * PRICE.cacheRead) / 1e6;
  }
  summary() {
    return { calls: this.calls, input: this.input, output: this.output,
      cache_read: this.cacheRead, cache_write: this.cacheWrite, usd: +this.usd.toFixed(4) };
  }
}

type Opts = { system: string; user: string; effort?: Effort; maxTokens?: number; meter?: Meter };

/**
 * One structured call. `system` is cached (it carries the voice profile, which is identical
 * across every post for a site), `user` is the per-post part.
 */
export async function generate<T extends z.ZodTypeAny>(schema: T, opts: Opts): Promise<z.infer<T>> {
  const res = await client.messages.parse({
    model: MODEL,
    max_tokens: opts.maxTokens ?? 16000,
    output_config: { effort: opts.effort ?? 'medium', format: zodOutputFormat(schema) },
    system: [{ type: 'text', text: opts.system, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: opts.user }],
  });
  opts.meter?.add(res.usage);
  if (res.stop_reason === 'refusal') {
    throw new Error(`model refused: ${res.stop_details?.category ?? 'unknown'}`);
  }
  if (res.stop_reason === 'max_tokens') throw new Error('output truncated at max_tokens');
  if (!res.parsed_output) throw new Error('model returned no parseable output');
  return res.parsed_output;
}
