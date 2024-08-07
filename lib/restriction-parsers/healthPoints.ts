import { Champion, Restriction } from "../types.ts";

function parseHp(champion: Champion): boolean {
  return champion.stats.hp < 550;
}

export const hpRestriction: Restriction = {
  champion_list: [],
  hash: "",
  name: "Hp < 550",
  operation: parseHp,
};
