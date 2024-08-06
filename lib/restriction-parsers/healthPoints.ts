import { Champion, Restriction } from "../types.ts";

function parseHp(champion: Champion): boolean {
  return champion.stats.hp < 550;
}

export const hpRestriction: Restriction = {
  name: "hp_lt_550",
  champion_list: [],
  hash: "",
  display_name: "Hp < 550",
  operation: parseHp,
};
