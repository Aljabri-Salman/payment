import { ConvexHttpClient, ConvexClient } from "convex/browser";
import { api } from "@/convex/_generated/api.js";

const httpClient = new ConvexHttpClient(process.env.CONVEX_URL || "https://focused-hound-964.convex.cloud");
httpClient.query(
  api.queries.merchants.listMerchants,
  {
    paginationOpts: { numItems: 10, cursor: null },
  }).then((messages) => {
    console.log(messages);
  });


const client = new ConvexClient(process.env.CONVEX_URL || "https://focused-hound-964.convex.cloud");
const unsubscribe = client.onUpdate(api.queries.merchants.listMerchants, {
  paginationOpts: { numItems: 10, cursor: null },
}, (messages) =>
  console.log(messages),
);
await Bun.sleep(1000);

await Bun.sleep(1000);