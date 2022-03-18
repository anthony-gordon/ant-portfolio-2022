// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import Client from "shopify-buy";
import fetch from "node-fetch";

let object = {};

const addItemToCheckout = async (variantId, checkoutId, quantity) => {
  const client = Client.buildClient(
    {
      storefrontAccessToken: process.env.REACT_APP_STORE_API_KEY,
      domain: process.env.REACT_APP_STORE_DOMAIN,
    },
    fetch
  );
  const lineItemsToAdd = [
    {
      variantId,
      quantity: parseInt(quantity),
    },
  ];
  await client.checkout
    .addLineItems(checkoutId, lineItemsToAdd)
    .then((checkout) => {
      object["checkout"] = checkout;
    })
    .catch((err) => console.log(err));
  return object;
};

exports.handler = async function (event, context) {
  const { quantity, variantid, checkoutid } = event.queryStringParameters;
  let variantId = variantid.replace(/equalssymbol/g, "=");
  let checkoutId = checkoutid.replace(/equalssymbol/g, "=");

  try {
    const checkout = await addItemToCheckout(variantId, checkoutId, quantity);
    return {
      statusCode: 200,
      body: JSON.stringify(checkout),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
