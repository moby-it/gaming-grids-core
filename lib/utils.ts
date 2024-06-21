import { encodeHex } from "encodeHex";
import { Restriction } from "../types.ts";
import {
  armorRestriction,
  assassinRestriction,
  attackSpeedRestriction,
  fighterRestriction,
  highDifficultyRestriction,
  hpRestriction,
  lowDifficultyRestriction,
  mageRestriction,
  marksmanRestriction,
  mediumDifficultyRestriction,
  moveSpeedRestriction,
  mpRestriction,
  rangeRestriction,
  supportRestriction,
  tankRestriction,
  usesEnergyRestriction,
  usesFuryRestriction,
  usesManaRestriction,
  usesNoneRestriction,
} from "./restriction-parsers/index.ts";

export function getRestrictions() {
  return [
    armorRestriction,
    assassinRestriction,
    attackSpeedRestriction,
    fighterRestriction,
    highDifficultyRestriction,
    hpRestriction,
    lowDifficultyRestriction,
    mageRestriction,
    marksmanRestriction,
    mediumDifficultyRestriction,
    moveSpeedRestriction,
    mpRestriction,
    rangeRestriction,
    supportRestriction,
    tankRestriction,
    usesEnergyRestriction,
    usesFuryRestriction,
    usesManaRestriction,
    usesNoneRestriction,
  ];
}
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
