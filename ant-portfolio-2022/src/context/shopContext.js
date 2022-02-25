import React, { useEffect, useState } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

function ShopProvider({ children }) {
  useEffect(() => {
    if (localStorage.checkout) {
      fetchCheckout(localStorage.checkout);
    } else {
      createCheckout();
    }
    fetchAllProducts();
  }, []);

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [checkout, setCheckout] = useState({});

  const client = Client.buildClient({
    domain: "lay-z-boy-1993.myshopify.com",
    storefrontAccessToken: "0aa1140efd450ddf2fd717f0de9b0e12",
  });

  const createCheckout = function () {
    client.checkout.create().then((checkout) => {
      setCheckout(checkout);
      localStorage.setItem("checkout", checkout.id);
    });
  };

  const fetchCheckout = function (checkoutId) {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        setCheckout(checkout);
      })
      .catch((err) => console.log(err));
  };

  const fetchAllProducts = function () {
    client.product.fetchAll().then((products) => {
      setProducts(products);
    });
  };

  const fetchCurrentProduct = function (productHandle) {
    let currentProduct = products.find(
      (product) => product.handle === productHandle.toLowerCase()
    );
    if (currentProduct) {
      client.product.fetch(currentProduct.id).then((product) => {
        setProduct(product);
      });
    }
  };

  const addItemToCheckout = function (variantId, quantity, checkoutId) {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity),
      },
    ];
    console.log(lineItemsToAdd);

    client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((checkout) => {
        setCheckout(checkout);
      });
  };

  return (
    <ShopContext.Provider
      value={{
        product: product,
        products: products,
        checkout: checkout,
        fetchAllProducts: fetchAllProducts,
        fetchCurrentProduct: fetchCurrentProduct,
        addItemToCheckout: addItemToCheckout,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;