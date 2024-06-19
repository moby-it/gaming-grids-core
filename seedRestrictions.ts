
const { data } = JSON.parse(await Deno.readTextFile('./champion.json'));
const champions = Object.entries(data).map(hero => hero[1]);
import {
    parseDifficultyRestrictions,
    parsePowerSourceRestrictions,
    parseTagRestrictions,
    parseArmorRestrictions,
    parseHpRestrictions,
    parseAttackSpeedRestrictions,
    parseMoveSpeedRestrictions,
    parseMpRestrictions,
    parseRangeRestrictions
} from "./restrictionLogic.ts";

import { getValidatedInput } from "./transformData.ts";
import { restriction } from "./types.d.ts";

export async function parseRestrictions(input: unknown[]): Promise<restriction[]> {
    const champions = getValidatedInput(input);
    if (!champions) console.log("No valid input!");
    const tagRestrictions = await parseTagRestrictions(champions);
    const difficultyRestrictions = await parseDifficultyRestrictions(champions);
    const powerSourceRestrictions = await parsePowerSourceRestrictions(champions);
    const armorRestrictions = await parseArmorRestrictions(champions);
    const attackSpeedRestrictions = await parseAttackSpeedRestrictions(champions);
    const hpRestrictions = await parseHpRestrictions(champions);
    const moveSpeedRestrictions = await parseMoveSpeedRestrictions(champions);
    const mpRestrictions = await parseMpRestrictions(champions);
    const rangeRestrictions = await parseRangeRestrictions(champions);


    return [...tagRestrictions, ...difficultyRestrictions, ...powerSourceRestrictions,
        armorRestrictions, attackSpeedRestrictions, hpRestrictions,
        moveSpeedRestrictions, mpRestrictions, rangeRestrictions]
}
