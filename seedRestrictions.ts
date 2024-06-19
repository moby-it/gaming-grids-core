const { data } = JSON.parse(await Deno.readTextFile('./champion.json'));
const champions = Object.entries(data).map(hero => hero[1]);
