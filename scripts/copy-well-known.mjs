/**
 * Add `apple-app-site-association` and `assetlinks.json` in `assets/.well-known`
 */
import * as fs from "fs";
import fsPromise from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import chalk from "chalk";
import { DateTime } from "luxon";

const startTime = DateTime.now();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nodeEnv = process.env.NODE_ENV || "development";

const iosConfigFilename = "apple-app-site-association";
const androidConfigFilename = "assetlinks.json";

const sourceDirectory = path.resolve(__dirname, `../assets/.well-known/${nodeEnv}`);
const outputDirectory = path.resolve(__dirname, "../public/.well-known");

const iosConfigFilepath = sourceDirectory + "/" + iosConfigFilename;
const androidConfigFilepath = sourceDirectory + "/" + androidConfigFilename;

if (!fs.existsSync(outputDirectory)) {
  await fsPromise.mkdir(outputDirectory, { recursive: true });
}

await fsPromise.access(iosConfigFilepath, fs.constants.R_OK);
await fsPromise.access(androidConfigFilepath, fs.constants.R_OK);

await fsPromise.copyFile(iosConfigFilepath, outputDirectory + "/" + iosConfigFilename);
await fsPromise.copyFile(androidConfigFilepath, outputDirectory + "/" + androidConfigFilename);

console.log(
  chalk.green("done") +
    "  - .well-known files copied in " +
    DateTime.now().diff(startTime).milliseconds.toLocaleString("en") +
    "ms"
);
