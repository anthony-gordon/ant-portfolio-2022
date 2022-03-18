// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import Client from "shopify-buy";
import fetch from "node-fetch";

let object = {};

const fetchCheckout = async (id) => {
  const client = Client.buildClient(
    {
      storefrontAccessToken: process.env.REACT_APP_STORE_API_KEY,
      domain: process.env.REACT_APP_STORE_DOMAIN,
    },
    fetch
  );
  await client.checkout
    .fetch(id)
    .then((checkout) => {
      object["checkout"] = checkout;
    })
    .catch((err) => console.log(err));
  return object;
};

exports.handler = async function (event, context) {
  const { id } = event.queryStringParameters;

  try {
    const checkout = await fetchCheckout(id);
    return {
      statusCode: 200,
      body: JSON.stringify(checkout),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
