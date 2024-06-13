import { getSupaBaseClient } from "./supabase.ts";
import { load } from "https://deno.land/std@0.221.0/dotenv/mod.ts";
import { validateInput } from "./utils.ts"
const env = await load();
const { data } = JSON.parse(await Deno.readTextFile('./champion.json'));
const supabase = await getSupaBaseClient();
const heroes = validateInput(Object.entries(data).map(hero => hero[1]));
if (Array.isArray(heroes)) {
    const { error } = await supabase.from('champion').insert(heroes.map(hero => {
        if (hero && typeof hero === 'object' && 'name' in hero && 'id' in hero) {
            return { name: hero.name, image_url: env["BUCKET_URL"] + hero.id + '_0.jpg' };
        }
    }
    )
    );
    if (error) console.log(error.details);
}
