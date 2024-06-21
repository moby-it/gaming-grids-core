import { encodeHex } from "encodeHex";
import { Restriction } from "../lib/types.ts";

export async function hashList(restriction: Restriction): Promise<string> {
  const listBuffer = new TextEncoder().encode(
    JSON.stringify(restriction.champion_list),
  );
  const hashBuffer = await crypto.subtle.digest("SHA-256", listBuffer);
  return encodeHex(hashBuffer);
}

export function getFiles(inputFolder: string): string[] {
  const files: string[] = [];
  const folder = Deno.readDirSync(inputFolder);
  for (const file of folder) {
    files.push(file.name);
  }
  return files;
}
