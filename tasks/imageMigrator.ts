import { getSupaBaseClient} from '../supabase.ts';
import { handleUpload } from '../upload.ts';

const bucketName= 'champions';
const supabase = await getSupaBaseClient();;

await handleUpload(supabase, bucketName);