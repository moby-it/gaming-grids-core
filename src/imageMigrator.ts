import fs from 'node:fs';
import { getSupaBaseClient, getBucketFileData } from './supabase.ts';
import { hanldeUpload } from './upload.ts';

const bucketName: string = 'champions'
const supabase = await getSupaBaseClient();
const SupaBaseImages = await getBucketFileData(supabase, bucketName);
const inputFolder: string = './public/champions';
const files = fs.readdirSync(inputFolder);

await hanldeUpload(supabase, bucketName);


