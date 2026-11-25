// The One-Liner Groan-Off: one original dad joke, one line, max 140 chars.
// Writes the joke to $MAKEFUN_OUTPUT_DIR/entry.txt, with no trailing newline.
// Deterministic: no network, no clock, no randomness, no input.
// The entry is written exactly as-is: one line, 91 characters, ASCII only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One joke, fixed at build time: the program never invents text at runtime.
const JOKE =
  "I asked my dad bod for a six-pack. It brought back a case of soda and said, 'Close enough.'";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
