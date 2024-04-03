import * as path from "https://deno.land/std@0.221.0/path/mod.ts";

export function copyFiles(
  files: string[],
  src: string,
  destination: string,
): void {
  for (const file of files) {
    if (file.includes("_0") && !file.includes(":")) {
      const oldPath = path
        .join(src, "/", file);
      const newPath = path
        .join(destination, "/", file);
      Deno.copyFileSync(oldPath, newPath);
    }
  }
}
