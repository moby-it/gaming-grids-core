import { Champion, Restriction } from "../types.ts";

function parseMana(champion: Champion): boolean {
  return champion.partype === "Mana";
}
function parseFury(champion: Champion): boolean {
  return champion.partype === "Fury";
}
function parseNone(champion: Champion): boolean {
  return champion.partype === "None" || champion.partype === "";
}
function parseEnergy(champion: Champion): boolean {
  return champion.partype === "Energy";
}

export const usesFuryRestriction: Restriction = {
  champion_list: [],
  hash: "",
  name: "Uses fury",
  operation: parseFury,
};
export const usesNoneRestriction: Restriction = {
  champion_list: [],
  hash: "",
  name: "Uses no resource",
  operation: parseNone,
};
export const usesEnergyRestriction: Restriction = {
  champion_list: [],
  hash: "",
  name: "Uses energy",
  operation: parseEnergy,
};
export const usesManaRestriction: Restriction = {
  champion_list: [],
  hash: "",
  name: "Uses mana",
  operation: parseMana,
};
