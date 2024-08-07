import { Champion, Restriction } from "../types.ts";

function rangeParser(champion: Champion): boolean {
  return (champion.stats.attack_range > 575);
}
export const rangeRestriction: Restriction = {
  name: "Attack range > 575",
  champion_list: [],
  hash: "",
  operation: rangeParser,
};
