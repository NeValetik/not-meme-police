import "server-only";
import fs from "fs/promises";
import path from "path";
import type { Locale } from "./config";

const DICTIONARIES_DIR = path.join(process.cwd(), "i18n", "dictionaries");

export async function getDictionary(locale: Locale) {
  const dir = path.join(DICTIONARIES_DIR, locale);
  const files = await fs.readdir(dir);

  const entries = await Promise.all(
    files
      .filter((f) => f.endsWith(".json"))
      .map(async (f) => {
        const content = await fs.readFile(path.join(dir, f), "utf-8");
        return [f.replace(".json", ""), JSON.parse(content)] as const;
      })
  );

  return Object.fromEntries(entries) as Record<string, Record<string, string>>;
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
