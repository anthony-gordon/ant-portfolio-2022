// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import Client from "shopify-buy";
import fetch from "node-fetch";

let object = {};

const getProducts = async () => {
  const client = Client.buildClient(
    {
      storefrontAccessToken: process.env.REACT_APP_STORE_API_KEY,
      domain: process.env.REACT_APP_STORE_DOMAIN,
    },
    fetch
  );

  await client.product
    .fetchAll()
    .then((products) => {
      object["products"] = products;
    })
    .catch((err) => {
      console.log(err);
    });
  return object;
};

exports.handler = async function (event, context) {
  try {
    const products = await getProducts();
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
