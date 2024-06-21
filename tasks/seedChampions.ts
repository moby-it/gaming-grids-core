import * as v from "valibot";
import { load } from "env";
import { getSupaBaseClient } from "../lib/supabase.ts";
import { Champion } from "../lib/types.ts";
const env = await load();
const { data } = JSON.parse(await Deno.readTextFile("./assets/champion.json"));
const supabase = await getSupaBaseClient();
const { output: champions, success, issues } = v.safeParse(
  v.array(Champion),
  Object.entries(data).map((hero) => hero[1]),
);

if (!success) throw new Error("failed to parse champions." + issues);

for (const champion of champions) {
  const { error } = await supabase.from("champion").insert(
    {
      name: champion?.name,
      image_url: env["BUCKET_URL"] + champion?.id + "_0.jpg",
    },
  );
  if (error) console.log(error.details);
  else console.log(`Champion ${champion?.name} was inserted succesfully.`);
}
