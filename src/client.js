import { SanityClient } from "@sanity/client";
// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();
// import express from "express";

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "6n6s9lrw",
  dataset: "production",
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
});

// const client = new SanityClient({
//   projectId: "6n6s9lrw",
//   dataset: "production",
// });

export default client;
