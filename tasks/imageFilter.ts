import * as mod from "https://deno.land/std@0.221.0/fs/exists.ts";
import { copyFiles } from "../copyFiles.ts";
import { getFiles } from "../utils.ts";
const inputFolder = "./input";
const assets = 'assets'
const championsFolder = "assets/champions";
if (!mod.existsSync(assets)) {
  Deno.mkdirSync(assets);
}
if (!mod.existsSync(championsFolder)) {
  Deno.mkdirSync(championsFolder);
}
const files = getFiles(inputFolder);
copyFiles(files, inputFolder, championsFolder);
