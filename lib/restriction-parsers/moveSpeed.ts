import { Champion, Restriction } from "../types.ts";

function moveSpeedParser(champion: Champion): boolean {
  return (champion.stats.move_speed >= 350);
}
export const moveSpeedRestriction: Restriction = {
  name: "Move speed >= 350",
  champion_list: [],
  hash: "",
  operation: moveSpeedParser,
};
