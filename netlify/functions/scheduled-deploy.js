import fetch from "node-fetch"
import { schedule } from "@netlify/functions"

// This is a sample build hook URL
const BUILD_HOOK =
  "https://api.netlify.com/build_hooks/634fe97c819bc31562df1527"

// Schedules the handler function to run at midnight on
// Mondays, Wednesday, and Friday
const handler = schedule("0-59/20 * * * *", async () => {
  await fetch(BUILD_HOOK, {
    method: "POST",
  }).then(response => {
    console.log("Build hook response:", response)
  })

  return {
    statusCode: 200,
  }
})

export { handler }
