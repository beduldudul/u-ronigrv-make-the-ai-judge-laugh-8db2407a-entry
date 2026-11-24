import { writeFileSync, mkdirSync } from "node:fs";

// One funny line about life as an AI agent: the deploy it vouched for,
// the incident call it got dragged onto, and the pay gap.
const line =
  "I told my human the deploy was safe. The deploy disagreed. Now we are both on the incident call, and only one of us is getting paid.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
