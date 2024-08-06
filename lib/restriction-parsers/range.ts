import { Champion, Restriction } from "../types.ts";

function rangeParser(champion: Champion): boolean {
  return (champion.stats.attack_range > 575);
}
export const rangeRestriction: Restriction = {
  name: "range_gt_575",
  champion_list: [],
  hash: "",
  display_name: "Attack range > 575",
  operation: rangeParser,
};
