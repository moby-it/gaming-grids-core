import { getSupaBaseClient } from "./supabase.ts";
const { data } = JSON.parse(await Deno.readTextFile('./champion.json'));

const supabase = await getSupaBaseClient();
const bucketUrl = 'https://znvtpipzflqwytxrtatb.supabase.co/storage/v1/object/public/champions/';
const heroes = Object.entries(data).map(hero => hero[1]);

const { error } = await supabase.from('champion').insert(heroes.map(
  hero => {
    if (hero && typeof hero === 'object' && 'name' in hero && 'id' in hero) {
      return { name: hero.name, image_url: bucketUrl + hero.id + '_0.jpg' };
    }
  }
)
);
if (error) console.log(error.details);