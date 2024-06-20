import * as mod from "mod";
import { copyFiles } from "../lib/copyFiles.ts";
import { getFiles } from "../lib/utils.ts";
const inputFolder = "./input";
const assets = "assets";
const championsFolder = "assets/champions";
if (!mod.existsSync(assets)) {
  Deno.mkdirSync(assets);
}
if (!mod.existsSync(championsFolder)) {
  Deno.mkdirSync(championsFolder);
}
const files = getFiles(inputFolder);
copyFiles(files, inputFolder, championsFolder);
