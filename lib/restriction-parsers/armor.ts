import { Champion, Restriction } from "../types.ts";

function parseArmor(champion: Champion): boolean {
  return champion.stats.armor <= 29;
}

export const armorRestriction: Restriction = {
  name: "armor_lte_29",
  champion_list: [],
  hash: "",
  display_name: "Armor <= 29",
  operation: parseArmor,
};
