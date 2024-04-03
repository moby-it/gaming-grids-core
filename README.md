# Gaming Grids Image Migrator

This repository serves 2 purposes:

1. **image-filter:** Given a folder with League of Legends Champion Images, it filters it down to the images that have the suffix `_0.png`. This helps us
manage the default Data Dragon assets so that we have only what we need in the repo.
2. **image-migrator:** It has a migrate script that runs in deno which uploads the images in the `champions` folder to a Supabase Storage.

## Image Filter 

Iterates a folder named `input` folder, which contains the wanted data from League of
Legends Data Dragon Dataset, looks for the files that contain `_0` on their name
which are the champions' basic images and copies them to a `./champions` folder
to be used by the `image-migrator`.

## How to run

`deno task filter`

---

## Image Migrator

Migrates Images from `champions` folder to our Supabase Storage with the following steps:

1. connects to supabase storage,
2. It checks for the existence of the `champions` bucket. It creates the bucket if it doesn't exist.
3. Uploads any images that are **not already uploaded** on the supabase storage.

### Requirements

Before running make sure you have the correct `SUPABASE_URL` and `SUPABASE_KEY` in your .env file

### How to run

Run the migrator by `deno task migrator`.
