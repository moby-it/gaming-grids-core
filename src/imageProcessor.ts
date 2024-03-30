import fs from 'node:fs';
import { copyFiles } from './copyFiles.ts';

const inputFolder = './inputFolder';
const championsFolder = './public/champions';

if (!fs.existsSync(championsFolder)) {
    fs.mkdirSync(championsFolder);
};

const files = fs.readdirSync(inputFolder);

copyFiles(files, inputFolder, championsFolder);




