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
  name: "Fighter",
  champion_list: [],
  hash: "",
  operation: parseFighter,
};
export const mageRestriction: Restriction = {
  name: "Mage",
  champion_list: [],
  hash: "",
  operation: parseMage,
};
export const supportRestriction: Restriction = {
  name: "Support",
  champion_list: [],
  hash: "",
  operation: parseSupport,
};

export const assassinRestriction: Restriction = {
  name: "Assassin",
  champion_list: [],
  hash: "",
  operation: parseAssassin,
};
export const marksmanRestriction: Restriction = {
  name: "Marksman",
  champion_list: [],
  hash: "",
  operation: parseMarksman,
};

export const tankRestriction: Restriction = {
  name: "Tank",
  champion_list: [],
  hash: "",
  operation: parseTank,
};
