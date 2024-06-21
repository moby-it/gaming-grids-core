import { Champion, Restriction } from "../types.ts";

function parseMana(champion: Champion): boolean {
  return champion.partype === "Mana";
}
function parseFury(champion: Champion): boolean {
  return champion.partype === "Fury";
}
function parseNone(champion: Champion): boolean {
  return champion.partype === ("None" || "");
}
function parseEnergy(champion: Champion): boolean {
  return champion.partype === "Energy";
}

export const usesFuryRestriction: Restriction = {
  name: "fury",
  champion_list: [],
  hash: "",
  display_name: "Uses fury",
  operation: parseFury,
};
export const usesNoneRestriction: Restriction = {
  name: "none",
  champion_list: [],
  hash: "",
  display_name: "Uses no resource",
  operation: parseNone,
};
export const usesEnergyRestriction: Restriction = {
  name: "energy",
  champion_list: [],
  hash: "",
  display_name: "Uses energy",
  operation: parseEnergy,
};
export const usesManaRestriction: Restriction = {
  name: "mana",
  champion_list: [],
  hash: "",
  display_name: "Uses mana",
  operation: parseMana,
};
