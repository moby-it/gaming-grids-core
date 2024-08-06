import { Champion, Restriction } from "../types.ts";

function parseFighter(champion: Champion): boolean {
  return champion?.tags.includes("Fighter");
}
function parseMage(champion: Champion): boolean {
  return champion?.tags.includes("Mage");
}
function parseSupport(champion: Champion): boolean {
  return champion?.tags.includes("Support");
}
function parseAssassin(champion: Champion): boolean {
  return champion?.tags.includes("Assassin");
}
function parseMarksman(champion: Champion): boolean {
  return champion?.tags.includes("Marksman");
}
function parseTank(champion: Champion): boolean {
  return champion?.tags.includes("Tank");
}

export const fighterRestriction: Restriction = {
  name: "fighter",
  champion_list: [],
  hash: "",
  display_name: "Fighter",
  operation: parseFighter,
};
export const mageRestriction: Restriction = {
  name: "mage",
  champion_list: [],
  hash: "",
  display_name: "Mage",
  operation: parseMage,
};
export const supportRestriction: Restriction = {
  name: "support",
  champion_list: [],
  hash: "",
  display_name: "Support",
  operation: parseSupport,
};

export const assassinRestriction: Restriction = {
  name: "assassin",
  champion_list: [],
  hash: "",
  display_name: "Assassin",
  operation: parseAssassin,
};
export const marksmanRestriction: Restriction = {
  name: "marksman",
  champion_list: [],
  hash: "",
  display_name: "Marksman",
  operation: parseMarksman,
};

export const tankRestriction: Restriction = {
  name: "tank",
  champion_list: [],
  hash: "",
  display_name: "Tank",
  operation: parseTank,
};
