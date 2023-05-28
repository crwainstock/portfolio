import { SanityClient } from "@sanity/client";

const client = new SanityClient({
  projectId: process.env.projectId,
  dataset: "production",
});

export default client;

// export default SanityClient({
//   projectId: "6n6s9lrw",
//   dataset: "production",
// });
