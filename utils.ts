import * as v from "https://deno.land/x/valibot@v0.31.1/mod.ts";


export function getFiles(inputFolder: string): string[] {
    const files: string[] = [];
    const folder = Deno.readDirSync(inputFolder);
    for (const file of folder) {
        files.push(file.name);
    }
    return files;
}

