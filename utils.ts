import * as v from "https://deno.land/x/valibot@v0.31.1/mod.ts";

const schema = v.object({
    name: v.string(),
    id: v.string(),
});
export function validateInput(input: unknown[]): unknown | null {
    const validateRes = input.map(obje => {
        const { success, output } = v.safeParse(schema, obje);
        return { success, output }
    })
    if (validateRes.every(res => res.success === true)) {
        return validateRes.map(res => res.output);
    }
    return null;
}

export function getFiles(inputFolder: string): string[] {
    const files: string[] = [];
    const folder = Deno.readDirSync(inputFolder);
    for (const file of folder) {
        files.push(file.name);
    }
    return files;
}
