# Gaming Grids Core

This repository serves 4 purposes:

1. **image-filter:** Given a folder with League of Legends Champion Images, it filters it down to
   the images that have the suffix `_0.png`. This helps us manage the default Data Dragon assets so
   that we have only what we need in the repo.
2. **image-migrator:** It has a migrate script that runs in deno which uploads the images in the
   `champions` folder to a Supabase Storage.

3. **champion-parser:** Given the `champion.json` file, it filters the champions' data down to the
   name and image_url which then inserts them to the `champion` supabase table.

4. **restriction-parser:** Given the `champion.json` file, it filters the programmed restrictions
   containing the essential infromation (restriction name, display name, list of champions and the
   list hash) to the `restriction` supabase table.

## Image Filter

Iterates a folder named `input` folder, which contains the wanted data from League of Legends Data
Dragon Dataset, looks for the files that contain `_0` on their name which are the champions' basic
images and copies them to a `./champions` folder to be used by the `image-migrator`.

## How to run

`deno task filter`

---

## Image Migrator

Migrates Images from `champions` folder to our Supabase Storage with the following steps:

1. connects to supabase storage,
2. It checks for the existence of the `champions` bucket. It creates the bucket if it doesn't exist.
3. Uploads any images that are **not already uploaded** on the supabase storage.

### How to run

Run the migrator by `deno task migrator`.

---

## Champion Parser

Inserts data to our `champion` table by reading the `champion.json` file, connecting to the database
and mapping our champion data to keep only the necessary infromation (name,image url)

## How to run

`deno task seedChampions`

### Requirements

Before running make sure you have the correct `SUPABASE_URL`and `SUPABASE_KEY` in
your .env file

---

## Restriction Parser

Inserts data to our `restriction` table by reading the `champion.json` file, connecting to the
database and mapping our champion data to keep only the necessary infromation (restriction name,
display name, list of champions and the list hash)

## How to run

`deno task seedRestrictions`

### Requirements

Before running make sure you have the correct `SUPABASE_URL` and `SUPABASE_KEY` in your .env file
