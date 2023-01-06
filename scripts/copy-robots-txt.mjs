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

const sourceDirectory = path.resolve(__dirname, `../assets/robots-txt`);
const outputDirectory = path.resolve(__dirname, "../public");

const robotTxtFilepath = sourceDirectory + `/robots.${nodeEnv}.txt`;

await fsPromise.access(robotTxtFilepath, fs.constants.R_OK);

await fsPromise.copyFile(robotTxtFilepath, outputDirectory + "/robots.txt");

console.log(
  chalk.green("done") +
    "  - robots.txt copied in " +
    DateTime.now().diff(startTime).milliseconds.toLocaleString("en") +
    "ms"
);
