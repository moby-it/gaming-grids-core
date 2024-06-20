import { SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2.41.1";
import { getFiles } from "./utils.ts";
import {
  checkFileExists,
  createBucket,
  ensureBucketExists,
  getBucketFileData,
} from "./supabase.ts";

async function uploadFile(
  supabase: SupabaseClient,
  bucketName: string,
  destination: string,
  filename: BufferSource,
): Promise<void> {
  const { error } = await supabase.storage.from(bucketName).upload(
    destination,
    filename,
    {
      contentType: "image/jpeg",
    },
  );
  if (error) {
    console.error("Error uploading", filename, error.message);
  } else {
    console.log("Uploaded", filename);
  }
}

export async function handleUpload(
  supabase: SupabaseClient,
  bucketName: string,
): Promise<void> {
  const bucketExists = await ensureBucketExists(supabase, bucketName);
  if (!bucketExists) await createBucket(supabase, bucketName);
  const supaBaseImages = await getBucketFileData(supabase, bucketName);

  const championsFolder = "./assets/champions";
  const files = getFiles(championsFolder);

  for (const filename of files) {
    const fileExists = checkFileExists(supaBaseImages, filename);
    if (!fileExists) {
      const image: BufferSource = Deno.readFileSync(
        `${championsFolder}/${filename}`,
      );
      await uploadFile(supabase, bucketName, filename, image);
    }
  }
}
