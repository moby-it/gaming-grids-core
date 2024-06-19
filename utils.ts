import * as v from "https://deno.land/x/valibot@v0.31.1/mod.ts";
import { encodeHex } from "jsr:@std/encoding/hex";
import { restriction } from "./types.d.ts";
import { getValidatedInput } from "./transformData.ts";
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

export async function hashList(restriction: restriction): Promise<void> {
    const listBuffer = new TextEncoder().encode(JSON.stringify(restriction.champion_list));
    const hashBuffer = await crypto.subtle.digest("SHA-256", listBuffer);
    restriction.hash = encodeHex(hashBuffer);
}



export function getFiles(inputFolder: string): string[] {
    const files: string[] = [];
    const folder = Deno.readDirSync(inputFolder);
    for (const file of folder) {
        files.push(file.name);
    }
    return files;
}

export function getChampiontags(champions: unknown[]): { name: string; display_name: string; }[] {
    const schema = v.object({
        tags: v.array(v.string())
    });
    const tagsArray: string[] = [];
    champions.map(champion => {
        const { success, output } = v.safeParse(schema, champion);
        if (success) {
            output.tags.map(tag => {
                if (!tagsArray.includes(tag)) tagsArray.push(tag);
            })
        }
    })
    const championTags = tagsArray.map(tag => {
        return { name: tag, display_name: tag }
    })
    return championTags;
}

export function getChampionResources(champions: unknown[]) {
    const schema = v.object({
        partype: v.string()
    });
    const partypeArray: string[] = [];
    champions.map(champion => {
        const { success, output } = v.safeParse(schema, champion);
        if (success) {
            if (!output.partype) output.partype = "None"
            if (!partypeArray.includes(output.partype)) {
                partypeArray.push(output.partype);
            }
        }
    })
    const resourceArray = partypeArray.map(resource => {
        return { name: resource, display_name: `Uses ${resource}` }
    })
    return resourceArray;
}
export async function getRestrictions(input: unknown[]): Promise<restriction[]> {
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
