
import { createClient } from "next-sanity";

// Fetch environment variables on the client side
export const client = createClient({
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true, // or true, depending on whether you need cached data
});