import * as v from "https://deno.land/x/valibot@v0.31.1/mod.ts";


export function getFiles(inputFolder: string): string[] {
    const files: string[] = [];
    const folder = Deno.readDirSync(inputFolder);
    for (const file of folder) {
        files.push(file.name);
    }
    return files;
}

export function getChampiontags(champions: unknown[]): { name: string; displayName: string; }[] {
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
        return { name: tag, displayName: tag }
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
        return { name: resource, displayName: `Uses ${resource}` }
    })
    return resourceArray;
}