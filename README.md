# Moby IT gg-image-migrator

Migrates Images from League of Legends Data Dragon Dataset to our
infrastructure. First, it connects to supabase storage, then it checks for the
existence of the "champions" bucket, creates the bucket if it doesn't exist and
uploads any images from the champions folder not already uploaded on the
supabase storage.

To run it, type "Deno task migrator" from the root directory.

# Moby IT gg-image-processor

Iterates the "inputFolder" folder, which contains the wanted data from League of
Legends Data Dragon Dataset, looks for te files that contain '_0' on their name
which are the champions' basic images and copies them to a './champions' folder
to be used by the image-migrator.

To run it type 'Deno task processsor'.
