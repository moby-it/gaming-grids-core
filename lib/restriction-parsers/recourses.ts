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
  name: "uses_fury",
  champion_list: [],
  hash: "",
  display_name: "Uses fury",
  operation: parseFury,
};
export const usesNoneRestriction: Restriction = {
  name: "uses_none",
  champion_list: [],
  hash: "",
  display_name: "Uses no resource",
  operation: parseNone,
};
export const usesEnergyRestriction: Restriction = {
  name: "uses_energy",
  champion_list: [],
  hash: "",
  display_name: "Uses energy",
  operation: parseEnergy,
};
export const usesManaRestriction: Restriction = {
  name: "uses_mana",
  champion_list: [],
  hash: "",
  display_name: "Uses mana",
  operation: parseMana,
};
