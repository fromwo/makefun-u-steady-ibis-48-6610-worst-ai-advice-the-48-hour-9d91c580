import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Worst AI advice, written as one confident, tidy one-liner:
// a plausible money-saving tip that would end very badly if followed.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const ADVICE =
  "To save on rent, move into your office server room — it's climate-controlled, and IT never checks there after 6pm.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ADVICE);
