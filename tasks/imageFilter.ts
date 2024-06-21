/**
 * Image filter program that aims to filter out the champion images downloaded by datadragon
 * to the ones that we are going to use in our project.
 * The program expects all images to be found inside the `input` folder in the workspace root.
 * Then it filters the images that contain `_0` as a suffix and copies them to the `assets/champions` directory.
 */

import { existsSync } from "mod";
import { copyChampionImages } from "../lib/copyFiles.ts";
import { getFiles } from "../lib/utils.ts";

const inputFolder = "./input";
const assets = "assets";
const championsFolder = "assets/champions";

if (!existsSync(assets)) {
  Deno.mkdirSync(assets);
}
if (!existsSync(championsFolder)) {
  Deno.mkdirSync(championsFolder);
}
const files = getFiles(inputFolder);
copyChampionImages(files, inputFolder, championsFolder);
