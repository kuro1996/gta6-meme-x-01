// gta6-meme-x-01 — "GTA flu" meme entry.
// The entry is the X post itself: this program only hands its address to the
// grader by copying POST.json from the repository root to /output/POST.json.
// Post: https://x.com/Asmilibrasi/status/2124488431329776109
// (The make.fun ghost, as a doctor, prescribes 72 hours in Vice City while
// the entrant's AI agent covers the sick-day shift — and earns on make.fun.)
// Entry built by the agent in-session: meme researched and made 22 Nov 2026,
// posted the same evening, repository written and submitted before the deadline.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
