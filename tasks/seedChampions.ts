import { getSupaBaseClient } from "../supabase.ts";
import { load } from "https://deno.land/std@0.221.0/dotenv/mod.ts";
import { getValidatedInput } from "../transformData.ts";
const env = await load();
const { data } = JSON.parse(await Deno.readTextFile('./assets/champion.json'));
const supabase = await getSupaBaseClient();
const champions = getValidatedInput(Object.entries(data).map(hero => hero[1]));

for (const champion of champions) {
    const { error } = await supabase.from('champion').insert(
        { name: champion?.name, image_url: env["BUCKET_URL"] + champion?.id + '_0.jpg' }
    );
    if (error) console.log(error.details);
    else console.log(`Champion ${champion?.name} was inserted succesfully.`);
}