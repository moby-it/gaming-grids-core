import { Champion, Restriction } from "../../types.ts";

function mpParser(champion: Champion): boolean {
  return (champion.partype === "Mana" && champion.stats.mp >= 480);
}
export const mpRestriction: Restriction = {
  name: "Mana>=480",
  champion_list: [],
  hash: "",
  display_name: "Mana >= 480",
  operation: mpParser,
};
