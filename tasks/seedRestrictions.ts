import { parseRestrictions } from "../lib/parseRestrictions.ts";
import { getSupaBaseClient } from "../lib/supabase.ts";
import { Champion, DbRestriction } from "../lib/types.ts";
import * as v from "valibot";

const { data } = JSON.parse(await Deno.readTextFile("./assets/champion.json"));
const { output: champions, success, issues } = v.safeParse(
  v.array(Champion),
  Object.entries(data).map((hero) => hero[1]),
);
if (!success) throw new Error("failed to parse champions" + issues);
const restrictions: DbRestriction[] = await parseRestrictions(champions);

const supabase = await getSupaBaseClient();

for (const r of restrictions) {
  const { data } = await supabase.from("restriction").select("hash").eq("name", r.name);
  if (!data?.length) {
    const { error } = await supabase.from("restriction").insert(r);
    if (error) console.log(error);
    else console.log(`Restriction ${r.name} was inserted successfully`);
  } else {
    if (r.hash === data[0].hash) {
      console.log(`Restriction ${r.name} is up to date`);
      continue;
    }
    const { error } = await supabase.from("restriction")
      .update({ hash: r.hash, champion_list: r.champion_list }).eq(
        "name",
        r.name,
      );
    if (error) throw error;
    console.log(`restriction ${r.name} was updated`);
  }
}
