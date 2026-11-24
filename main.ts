// Two Days of Quiet Dread — one-line code review comment approving a PR
// with quiet existential dread. Writes exactly one line (1-140 chars,
// no trailing newline) to ENTRY_OUTPUT or /output/entry.txt.

const entry =
  "Approved. It works, the tests pass, and none of us will remember any of this by Friday, let alone forever.";

if (
  !/^[^\n]{1,140}$/.test(entry) ||
  entry.trim().length === 0 ||
  entry !== entry.trim() ||
  /[\u0000-\u001f\u007f]/.test(entry)
) {
  throw new Error("entry fails gate: must be 1-140 chars, single line, non-blank, no leading/trailing whitespace, no control chars");
}

const fs = require("node:fs");
const path = require("node:path");
const out = process.env.ENTRY_OUTPUT || "/output/entry.txt";
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, entry, "utf8");
