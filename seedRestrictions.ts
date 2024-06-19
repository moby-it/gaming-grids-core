import { getSupaBaseClient } from "./supabase.ts";
import { restriction } from "./types.d.ts";
import { getRestrictions } from "./utils.ts";
const { data } = JSON.parse(await Deno.readTextFile('./champion.json'));
const champions = Object.entries(data).map(hero => hero[1]);
const restrictions: restriction[] = await getRestrictions(champions);

async function seedRestrictions(
    restrictions: restriction[])
    : Promise<void> {
    const supabase = await getSupaBaseClient();
    for (const restriction of restrictions) {
        const { data } = await supabase.from('restriction').select('hash').eq('name', restriction.name)
        if (!data?.length) {

            const { error } = await supabase.from('restriction').insert(restriction);
            if (error) console.log(error)
            else console.log(`Restriction ${restriction.name} was inserted seeded successfully`)
        } else {

            if (restriction.hash !== data[0].hash) {
                const { error } = await supabase.from('restriction')
                    .update({ hash: restriction.hash, champion_list: restriction.champion_list }).eq('name', restriction.name);
                if (error) console.log(error)
                console.log(`restriction ${restriction.name} was updated`);
            } else {
                console.log(` Restriction ${restriction.name} is up to date`);
            }
        }
    }
}
await seedRestrictions(restrictions);