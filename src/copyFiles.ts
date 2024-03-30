import path from 'node:path';
import fs from 'node:fs';

export function copyFiles(files: string[], src: string, destination: string): void {

    for (const file of files) {

        if (file.includes('_0') && !file.includes(':')) {
            const oldPath = path
                .join(src, '/', file);

            const newPath = path
                .join(destination, '/', file);

            fs.copyFileSync(oldPath, newPath);
        }
    }
}