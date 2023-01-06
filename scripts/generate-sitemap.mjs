import fsPromise from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import chalk from "chalk";
import { DateTime } from "luxon";

import sitemapConfig from "../assets/sitemap.config.json" assert { type: "json" };

const startTime = DateTime.now();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nodeEnv = process.env.NODE_ENV || "development";

const outputDirectory = path.resolve(__dirname, "../public");

await main();

async function main() {
  if (nodeEnv !== "production") {
    console.log(chalk.cyan("info") + `  - skip sitemap.xml generation as NODE_ENV=${nodeEnv}`);
    return;
  }

  const lastmod = DateTime.now().toISODate();
  const domain = `${/** your custom domain */ "www.abc.com"}`;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${domain}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
${sitemapConfig.locations
  .map(
    (loc) => `  <url>
    <loc>${domain}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>
  `;

  await fsPromise.writeFile(outputDirectory + "/sitemap.xml", sitemap);

  console.log(
    chalk.green("done") +
      "  - sitemap generated in " +
      DateTime.now().diff(startTime).milliseconds.toLocaleString("en") +
      "ms"
  );
}
