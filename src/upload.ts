import { SupaBaseClient } from "https://esm.sh/@supabase/supabase-js@2";
import fs from 'node:fs';
import { ensureBucketExists, createBucket, checkFileExists, getBucketFileData } from './supabase.ts'

async function uploadFile(supabase: SupaBaseClient, bucketName: string, destination: string, filename: Buffer): Promise<void> {

    const { data, error } = await supabase.storage.from(bucketName).upload(destination, filename, {
        contentType: 'image/jpeg',
    });
    if (error) {
        console.error("Error uploading", filename, error.message);
    } else {
        console.log("Uploaded", filename);
    }
}

export async function hanldeUpload(supabase: SupaBaseClient, bucketName: string,): Promise<void> {

    const bucketExists = await ensureBucketExists(supabase, bucketName);
    if (!bucketExists) await createBucket(supabase, bucketName);
    const supaBaseImages = await getBucketFileData(supabase, bucketName);

    const inputFolder: string = './public/champions';
    const files = fs.readdirSync(inputFolder);

    for (const filename of files) {
        const fileExists = await checkFileExists(supaBaseImages, filename);
        if (!fileExists) {
            const image: Buffer = fs.readFileSync(`./public/champions/${filename}`);
            await uploadFile(supabase, bucketName, filename, image);
        }
    }
}