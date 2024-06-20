import { Champion, DbRestriction, Restriction } from "../types.ts";
import { hashList } from "./utils.ts";
import { getRestrictions } from "./utils.ts";
export async function parseRestrictions(champions: Champion[]): Promise<DbRestriction[]> {
  const restrictions: Restriction[] = getRestrictions();
  for (const champion of champions) {
    for (const r of restrictions) {
      if (r.operation(champion)) {
        r.champion_list.push(champion.name);
      }
    }
  }
  for (const r of restrictions) {
    r.hash = await hashList(r);
  }
  return restrictions.map((r) => {
    return {
      name: r.name,
      display_name: r.display_name,
      champion_list: r.champion_list,
      hash: r.hash,
    };
  });
}
