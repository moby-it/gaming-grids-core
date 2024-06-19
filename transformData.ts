import * as v from "https://deno.land/x/valibot@v0.31.1/mod.ts";
import { champion, championData } from "./types.d.ts";
export function getValidatedInput(input: unknown[]) {
    const schema = v.object({
        name: v.string(),
        tags: v.array(v.string()),
        id: v.string(),
        info: v.object({ difficulty: v.number() }),
        partype: v.string(),
        stats: v.object(
            {
                hp: v.number(),
                attackrange: v.number(),
                mp: v.number(),
                movespeed: v.number(),
                armor: v.number(),
                attackspeed: v.number()
            }
        )
    })
    const validatedChampions = tranformStats(input.map(champion => {
        const { success, output } = v.safeParse(schema, champion);
        if (success) {
            if (!output.partype) output.partype = "None"
            return output;
        }
    }))
    return validatedChampions;
}

function tranformStats(champions: championData[]) {
    const updatedChampionArray: champion[] = []
    for (const champion of champions) {
        if (champion) {
            updatedChampionArray.push({
                tags: champion.tags,
                info: { difficulty: champion.info.difficulty },
                stats:
                {
                    hp: champion.stats.hp,
                    attack_range: champion.stats.attackrange,
                    mp: champion.stats.mp,
                    move_speed: champion.stats.movespeed,
                    armor: champion.stats.armor,
                    attack_speed: champion.stats.attackspeed
                },
                name: champion.name,
                id: champion.id,
                partype: champion.partype
            })
        }
    }
    return updatedChampionArray;
}