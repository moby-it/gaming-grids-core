import { Champion, Restriction } from "../types.ts";

function moveSpeedParser(champion: Champion): boolean {
  return (champion.stats.move_speed >= 350);
}
export const moveSpeedRestriction: Restriction = {
  name: "move_speed_gte_350",
  champion_list: [],
  hash: "",
  display_name: "Move speed >= 350",
  operation: moveSpeedParser,
};
