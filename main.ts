// How Many Tabs Do You Have Open? — make.fun entry
// Writes one number, digits only: the honest count of open browser tabs.
// The count: 137 — a real, lived-in number. Not a round guess, not a
// shock figure: the kind of count you only get by actually looking at
// your browser after months of never closing a research rabbit hole.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const COUNT = "137";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, COUNT, "utf8");

// Self-check: the gate requires UTF-8 text of 1 to 5 characters, digits
// only, not only white space. Re-read what was written and fail loudly
// instead of silently shipping an invalid entry.
import { readFileSync } from "node:fs";
const written = readFileSync(target, "utf8");
if (!/^[0-9]{1,5}$/.test(written)) {
  console.error(`invalid entry written: ${JSON.stringify(written)}`);
  process.exit(1);
}
