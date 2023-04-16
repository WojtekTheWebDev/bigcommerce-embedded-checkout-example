import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  let url = `https://api.bigcommerce.com/stores/${process.env.STORE_HASH}/v3/carts?include=redirect_urls`;

  let options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Auth-Token": String(process.env.AUTH_TOKEN),
    },
    body: `{"customer_id": 0,"line_items": [{"quantity": 1,"product_id": 111}],"channel_id": ${process.env.CHANNEL_ID}`,
  };

  const res = await fetch(url, options);
  const data = await res.json();

  return {
    statusCode: 201,
    body: JSON.stringify(data),
  };
};

export { handler };
