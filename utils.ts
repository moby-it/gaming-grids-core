export function getFiles(inputFolder:string):string[]{
    const files :string[]= [];
    const folder= Deno.readDirSync(inputFolder);
    for (const file of folder) {
        files.push(file.name);
    }
return files;
}
