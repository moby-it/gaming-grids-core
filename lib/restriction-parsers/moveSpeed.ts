import { Champion, Restriction } from "../../types.ts";

function moveSpeedParser(champion: Champion): boolean {
  return (champion.stats.move_speed >= 480);
}
export const moveSpeedRestriction: Restriction = {
  name: "moveSpeed>= 480",
  champion_list: [],
  hash: "",
  display_name: "Move speed >= 480",
  operation: moveSpeedParser,
};
