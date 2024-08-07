import { Champion, Restriction } from "../types.ts";

function parseArmor(champion: Champion): boolean {
  return champion.stats.armor <= 29;
}

export const armorRestriction: Restriction = {
  champion_list: [],
  hash: "",
  name: "Armor <= 29",
  operation: parseArmor,
};
