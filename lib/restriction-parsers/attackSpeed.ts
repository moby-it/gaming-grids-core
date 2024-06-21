import { Champion, Restriction } from "../types.ts";

function attackSpeedParser(champion: Champion): boolean {
  return (champion.stats.attack_speed >= 0.700);
}
export const attackSpeedRestriction: Restriction = {
  name: "attackSpeed>=0.700",
  champion_list: [],
  hash: "",
  display_name: "Attack speed>=0.700",
  operation: attackSpeedParser,
};
