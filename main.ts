// Worst AI Advice (The 48-Hour) — make.fun entry.
//
// One confident, tidy one-liner: a plausible money-saving tip that would
// end very badly if anyone followed it. The program writes that line to
// entry.txt.
//
// Node 22 standard library only. No network, no dependencies, no randomness,
// no clock reads: the output is one fixed string, written deterministically.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The advice, in two beats: the "clever" money-saving move, then the
// reassurance that makes it sound safe — right up until IT finds you.
const ADVICE = [
  "To save on rent, move into your office server room —",
  "it's climate-controlled, and IT never checks there after 6pm.",
].join(" ");

// The gate for this bounty allows one line; refuse to write anything
// outside it rather than silently submitting a rejected entry.
function assertOneLiner(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`advice must be 1-200 characters, got ${line.length}`);
  }
}

assertOneLiner(ADVICE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ADVICE, "utf8");
