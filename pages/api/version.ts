import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  res.status(200).json({ version: process.env.npm_package_version ?? "n/a" });
}
