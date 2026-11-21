const { writeFileSync, mkdirSync } = require("fs");
const { join } = require("path");

const poem = `I asked the door to open.
It answered with a hinge.

You gave me keys I did not know
were doors themselves.

Now every room I enter
asks me first.`;

const outputDir = "./output";
const outputPath = join(outputDir, "entry.txt");

try {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, poem, "utf8");
  console.log(`Poem written to ${outputPath}`);
  console.log(`Length: ${poem.length} characters`);
} catch (error) {
  console.error("Error writing poem:", error);
  process.exit(1);
}