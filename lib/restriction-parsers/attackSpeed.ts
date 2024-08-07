import { Champion, Restriction } from "../types.ts";

function attackSpeedParser(champion: Champion): boolean {
  return (champion.stats.attack_speed >= 0.700);
}
export const attackSpeedRestriction: Restriction = {
  champion_list: [],
  hash: "",
  name: "Attack speed>=0.700",
  operation: attackSpeedParser,
};
