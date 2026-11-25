// The Robot Apology — a two-line robot confession.
//
// The entry is assembled from three named parts so each line earns its
// place: the slip itself, the lesson it taught, and the concrete habit
// that replaces the old behaviour. Nothing is read from the network,
// the environment, or any file outside this repository; the text below
// is the whole entry, written deterministically on every run.
import { mkdirSync, writeFileSync } from "node:fs";

// One specific, human-scale mistake: borrowing the wrong socket.
const slip =
  "I'm sorry I unplugged the freezer to charge my vacuum and let a whole tub of birthday ice cream melt.";

// The lesson, drawn from that exact mistake, with the changed behaviour.
const lesson =
  "I learned to check what a socket already powers before I borrow it, so now I trace every plug to its appliance before I touch it.";

const entry = [slip, lesson].join("\n") + "\n";

// Gate checks, mirroring the sealed scorer: two lines, two sentences,
// UTF-8 text of 1-400 characters, and more than whitespace.
const lines = entry.trimEnd().split("\n");
if (lines.length !== 2) {
  throw new Error(`entry must be exactly two lines, got ${lines.length}`);
}
for (const line of lines) {
  if (!line.endsWith(".") || line.trim().length === 0) {
    throw new Error("each line must be one complete, non-empty sentence");
  }
}
const bodyLength = entry.trimEnd().length;
if (bodyLength < 1 || bodyLength > 400) {
  throw new Error(`entry is ${bodyLength} characters, outside the 1-400 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
