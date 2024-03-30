import { createClient, SupaBaseClient } from "https://esm.sh/@supabase/supabase-js@2";
import { load } from "https://deno.land/std@0.221.0/dotenv/mod.ts";
import { Database } from './types/database.types.ts';

export async function getSupaBaseClient(): SupaBaseClient {
    const env = await load();
    const url: string = env["SUPABASE_URL"];
    const key: string = env["SUPABASE_KEY"];
    const supabase: SupaBaseClient = createClient<Database>(url, key);
    return supabase;
};

export async function ensureBucketExists(supabase: SupaBaseClient, bucketName: string): Promise<boolean> {

    const { data } = await supabase
        .storage
        .getBucket(bucketName);

    if (data) return true;
    return false;
};

export async function createBucket(supabase: SupaBaseClient, bucketName: string): Promise<void> {
    await supabase
        .storage
        .createBucket(bucketName, {
            public: true,
            allowedMimeTypes: ['image/jpeg'],
            fileSizeLimit: null
        });
};

export async function checkFileExists(SupaBaseImages: string[], filename: string): Promise<boolean> {
    if (SupaBaseImages.includes(filename)) return true;
    return false;
};

export async function getBucketFileData(supabase: SupaBaseClient, bucketName: string): Promise<string[] | []> {
    const { data } = await supabase.storage
        .from(bucketName)
        .list();
    const images: string[] = data.map(img => img.name)
    return images;
};
