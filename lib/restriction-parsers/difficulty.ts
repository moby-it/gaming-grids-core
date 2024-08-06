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
  name: "low_difficulty",
  champion_list: [],
  hash: "",
  display_name: "Low difficulty",
  operation: parseLowDifficulty,
};
export const mediumDifficultyRestriction: Restriction = {
  name: "medium_difficulty",
  champion_list: [],
  hash: "",
  display_name: "Medium difficulty",
  operation: parseMediumDifficulty,
};
export const highDifficultyRestriction: Restriction = {
  name: "high_difficulty",
  champion_list: [],
  hash: "",
  display_name: "High difficulty",
  operation: parseHighDifficulty,
};

