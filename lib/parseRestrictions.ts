import { RESTRICTIONS } from "./restrictions.ts";
import { Champion, DbRestriction } from "./types.ts";
import { hashList } from "./utils.ts";

export async function parseRestrictions(champions: Champion[]): Promise<DbRestriction[]> {
  for (const champion of champions) {
    for (const r of RESTRICTIONS) {
      if (r.operation(champion)) {
        r.champion_list.push(champion.name);
      }
    }
  }
  for (const r of RESTRICTIONS) {
    r.hash = await hashList(r);
  }
  return RESTRICTIONS.map((r) => {
    return {
      name: r.name,
      display_name: r.display_name,
      champion_list: r.champion_list,
      hash: r.hash,
    };
  });
}
