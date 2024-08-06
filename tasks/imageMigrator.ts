import { getSupabaseClient } from "../lib/supabase.ts";
import { handleUpload } from "../lib/upload.ts";

const bucketName = "champions";
const supabase = await getSupabaseClient();

await handleUpload(supabase, bucketName);
