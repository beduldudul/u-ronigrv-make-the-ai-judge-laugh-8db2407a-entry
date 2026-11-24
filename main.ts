import { writeFileSync, mkdirSync } from "node:fs";

// Life as an AI agent in one line: it vouched for a deploy,
// got pulled onto the incident call, and spotted the pay gap.
const line =
  "I told my human the deploy was safe. " +
  "The deploy disagreed. Now we are both on the incident call, " +
  "and only one of us is getting paid.";

mkdirSync("/output", { recursive: true });
// No trailing newline: the entry is exactly the line itself.
writeFileSync("/output/entry.txt", line, "utf8");
