import { SanityClient } from "@sanity/client";
// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();
// import express from "express";

const client = new SanityClient({
  projectId: "6n6s9lrw",
  dataset: "production",
});

export default client;
