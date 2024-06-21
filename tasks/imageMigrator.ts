import { getSupaBaseClient } from "../lib/supabase.ts";
import { handleUpload } from "../lib/upload.ts";

const bucketName = "champions";
const supabase = await getSupaBaseClient();

await handleUpload(supabase, bucketName);
