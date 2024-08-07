import { Champion, Restriction } from "../types.ts";

function parseLowDifficulty(champion: Champion): boolean {
  return [0, 1, 2, 3].includes(champion.difficulty);
}
function parseMediumDifficulty(champion: Champion): boolean {
  return [4, 5, 6, 7].includes(champion.difficulty);
}
function parseHighDifficulty(champion: Champion): boolean {
  return [8, 9, 10].includes(champion.difficulty);
}
export const lowDifficultyRestriction: Restriction = {
  champion_list: [],
  hash: "",
  name: "Low difficulty",
  operation: parseLowDifficulty,
};
export const mediumDifficultyRestriction: Restriction = {
  champion_list: [],
  hash: "",
  name: "Medium difficulty",
  operation: parseMediumDifficulty,
};
export const highDifficultyRestriction: Restriction = {
  champion_list: [],
  hash: "",
  name: "High difficulty",
  operation: parseHighDifficulty,
};
