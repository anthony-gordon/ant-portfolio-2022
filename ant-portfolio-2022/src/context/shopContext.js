import React, { useEffect, useState } from "react";
import Client from "shopify-buy";
import strings from "./strings.js";
import {
  formatMoney,
  lowestVariantPrice,
  getImageString,
  addRemoveFixedPositionOnBody,
  randomId,
} from "./helperFunctions";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const ShopContext = React.createContext();

function ShopProvider({ children }) {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [variantsAsProducts, setVariantsAsProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [checkout, setCheckout] = useState({});
  const [loadingProcessDone, setLoadingProcessDone] = useState(false);

  useEffect(() => {
    const {
      updateLoading,
      updateLoadingOuterBackgroundInFrame,
      updateLoadingVisible,
      updateLoadingDisplay,
    } = bindActionCreators(actionCreators, dispatch);

    if (
      products &&
      products.length > 0 &&
      checkout &&
      typeof checkout !== undefined &&
      loadingProcessDone === false
    ) {
      setLoadingProcessDone(true);
      console.log("done");
      updateLoading(false);
      setTimeout(() => {
        updateLoadingOuterBackgroundInFrame(true);
        setTimeout(() => {
          updateLoadingVisible(false);
          setTimeout(() => {
            updateLoadingDisplay(false);
          }, 500);
        }, 500);
      }, 500);
    }
  }, [products, checkout, loadingProcessDone, dispatch]);

  const [client] = useState(
    Client.buildClient({
      domain: process.env.REACT_APP_STORE_DOMAIN,
      storefrontAccessToken: process.env.REACT_APP_STORE_API_KEY,
    })
  );

  const fetchCurrentProduct = function (productHandle) {
    console.log(productHandle, productHandle.toLowerCase());
    let currentProduct = variantsAsProducts.find(
      (product) => product.handle === productHandle.toLowerCase()
    );
    if (currentProduct) {
      setProduct(currentProduct);
    }
  };

  const addItemToCheckout = function (variantId, quantity, checkoutId) {
    return new Promise((resolve) => {
      const lineItemsToAdd = [
        {
          variantId,
          quantity: parseInt(quantity),
        },
      ];

      client.checkout
        .addLineItems(checkoutId, lineItemsToAdd)
        .then((checkout) => {
          setCheckout(checkout);
          resolve("resolved");
        });
    });
  };

  useEffect(() => {
    const fetchCheckout = function (checkoutId) {
      client.checkout
        .fetch(checkoutId)
        .then((checkout) => {
          setCheckout(checkout);
        })
        .catch((err) => console.log(err));
    };

    const createCheckout = function () {
      client.checkout.create().then((checkout) => {
        setCheckout(checkout);
        localStorage.setItem("checkout", checkout.id);
      });
    };

    const fetchAllProducts = function () {
      client.product.fetchAll().then((products) => {
        let productsArray = [];
        products.forEach((product) => {
          let productObject = product;
          productObject[`first_image_string`] = getImageString(
            product.images[0].src,
            "small"
          );
          productsArray.push(productObject);
        });
        let variantsAsProductsArray = [];
        setProducts(productsArray);
        productsArray.forEach((product) => {
          product.variants.forEach((variant) => {
            let variantObject = {
              title: `${product.title}${
                product.variants.length > 1 ? " - " : ""
              }${product.variants.length > 1 ? variant.title : ""}`,
              product_id: product.id,
              variant_id: variant.id,
              price: variant.price,
              description: product.description,
              available_for_sale: product.availableForSale,
              images: product.images,
              handle: `${product.handle}${
                product.variants.length > 1 ? "-" : ""
              }${
                product.variants.length > 1
                  ? variant.title.toLowerCase().replace(" ", "-")
                  : ""
              }`,
            };
            variantsAsProductsArray.push(variantObject);
          });
        });
        setVariantsAsProducts(variantsAsProductsArray);
      });
    };

    if (localStorage.checkout) {
      fetchCheckout(localStorage.checkout);
    } else {
      createCheckout();
    }
    fetchAllProducts();
  }, [client]);

  return (
    <ShopContext.Provider
      value={{
        product: product,
        products: products,
        checkout: checkout,
        fetchCurrentProduct: fetchCurrentProduct,
        addItemToCheckout: addItemToCheckout,
        strings: strings,
        formatMoney: formatMoney,
        lowestVariantPrice: lowestVariantPrice,
        getImageString: getImageString,
        addRemoveFixedPositionOnBody: addRemoveFixedPositionOnBody,
        variantsAsProducts: variantsAsProducts,
        randomId: randomId,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
