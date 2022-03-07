import Palette from "react-palette";
import React, { useEffect, useState } from "react";
import Client from "shopify-buy";
import strings from "./strings.js";
import {
  formatMoney,
  lowestVariantPrice,
  getImageString,
} from "./helperFunctions";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { usePalette } from "react-palette";

const ShopContext = React.createContext();

function ShopProvider({ children }) {
  const dispatch = useDispatch();

  const {
    updateLoading,
    updateLoadingOuterBackgroundInFrame,
    updateLoadingVisible,
    updateLoadingDisplay,
  } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (localStorage.checkout) {
      fetchCheckout(localStorage.checkout);
    } else {
      createCheckout();
    }
    fetchAllProducts();
  }, []);

  const [products, setProducts] = useState([]);
  const [productsImageDetails, setProductsImageDetails] = useState([]);
  const [product, setProduct] = useState({});
  const [checkout, setCheckout] = useState({});

  useEffect(() => {
    if (
      products &&
      products.length > 0 &&
      checkout &&
      typeof checkout != "undefined"
    ) {
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
  }, [products, checkout]);

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
      let productsArray = [];
      products.map((product) => {
        let productObject = product;

        productObject[`first_image_string`] = getImageString(
          product.images[0].src,
          "small"
        );

        productsArray.push(productObject);
      });

      setProducts(productsArray);
      // let productsImageDetailsArray = [];
      // products.forEach((product) => {
      //   let productImageDetailsObject = {};
      //   productImageDetailsObject[`id`] = product.id;
      //   productImageDetailsObject[`image_string`] = getImageString(
      //     product.images[0].src,
      //     "small"
      //   );

      //   productsImageDetailsArray.push(productImageDetailsObject);
      // });
      // setProductsImageDetails(productsImageDetailsArray);
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
        strings: strings,
        formatMoney: formatMoney,
        lowestVariantPrice: lowestVariantPrice,
        getImageString: getImageString,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
