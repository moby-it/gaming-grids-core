import { Champion, Restriction } from "../types.ts";

function moveSpeedParser(champion: Champion): boolean {
  return (champion.stats.move_speed >= 350);
}
export const moveSpeedRestriction: Restriction = {
  name: "moveSpeed>= 350",
  champion_list: [],
  hash: "",
  display_name: "Move speed >= 350",
  operation: moveSpeedParser,
};
