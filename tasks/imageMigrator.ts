/**
 * Image migrator takes the champion images found under `assets/champions` and uploads them to supabase
 */

import { getSupaBaseClient } from "../lib/supabase.ts";
import { upload } from "../lib/upload.ts";

const bucketName = "champions";
const supabase = await getSupaBaseClient();

await upload(supabase, bucketName);
