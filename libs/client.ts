import { createClient } from "microcms-js-sdk" //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "seriblog", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
})
