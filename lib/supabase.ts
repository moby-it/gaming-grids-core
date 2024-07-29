import { createClient, SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2.41.1";
import { load } from "https://deno.land/std@0.221.0/dotenv/mod.ts";

export async function getSupaBaseClient(): Promise<SupabaseClient> {
  const env = await load();
  const url: string = env["SUPABASE_URL"];
  const key: string = env["SUPABASE_KEY"];
  const supabase: SupabaseClient = createClient(url, key);
  return supabase;
}

export async function ensureBucketExists(
  supabase: SupabaseClient,
  bucketName: string,
): Promise<boolean> {
  const { data, error } = await supabase
    .storage
    .getBucket(bucketName);
  if (error) throw error
  if (data) return true;
  return false;
}

export async function createBucket(
  supabase: SupabaseClient,
  bucketName: string,
): Promise<void> {
  const { error } = await supabase
    .storage
    .createBucket(bucketName, {
      public: true,
      allowedMimeTypes: ["image/jpeg"],
      fileSizeLimit: null,
    });
  if (error) console.error("Error: ", error.message);
}

export function checkFileExists(
  SupaBaseImages: string[],
  filename: string,
): boolean {
  if (SupaBaseImages.includes(filename)) return true;
  return false;
}

export async function getBucketFileData(
  supabase: SupabaseClient,
  bucketName: string,
): Promise<string[] | []> {
  const { data, error } = await supabase.storage
    .from(bucketName)
    .list("", {
      limit: 200,
    });
  if (error) throw new Error(error.message);
  let images: string[] = [];
  if (data) {
    images = data.map((img) => img.name);
  }
  return images;
}
