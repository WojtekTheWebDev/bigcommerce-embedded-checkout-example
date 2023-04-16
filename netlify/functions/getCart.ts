import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const cartId = event.queryStringParameters?.cartId;

  if (!cartId || typeof cartId !== "string") {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "cartId is required and must be a string",
      }),
    };
  }

  let url = `https://api.bigcommerce.com/stores/${process.env.TORE_HASH}/v3/carts/3${cartId}?include=redirect_urls`;

  let options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Auth-Token": process.env.AUTH_TOKEN || "",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();

  return {
    statusCode: 201,
    body: JSON.stringify(data),
  };
};

export { handler };
