import React, { useEffect, useState } from "react";
import {
  formatMoney,
  lowestVariantPrice,
  addRemoveFixedPositionOnBody,
  randomId,
  onClickBounce,
  totalCheckoutQuantity,
} from "./helperFunctions";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { helpers } from "../helpers/helpersIndex";

const ShopContext = React.createContext();

function ShopProvider({ children }) {
  const dispatch = useDispatch();
  const { updateLineItemQuantity, generateProductLink, getImageString } =
    helpers;

  const [products, setProducts] = useState([]);
  const [variantsAsProducts, setVariantsAsProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [checkout, setCheckout] = useState({});
  const [loadingProcessDone, setLoadingProcessDone] = useState(false);
  const [checkoutTotalLineItems, setCheckoutTotalLineItems] = useState(0);
  const { updateCartCount } = bindActionCreators(actionCreators, dispatch);

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

  const loadServerlessFetchCheckoutFunction = async (checkoutId) => {
    console.log("there");

    try {
      const res = await fetch(
        `/.netlify/functions/fetch-checkout?id=${checkoutId}`
      );
      const checkout = await res.json();
      console.log(checkout);
      if (checkout[`checkout`]) {
        setCheckout(checkout[`checkout`]);
        updateCartCount(totalCheckoutQuantity(checkout[`checkout`]));
      } else {
        loadServerlessCreateCheckoutFunction();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loadServerlessCreateCheckoutFunction = async () => {
    console.log("here");
    try {
      const res = await fetch(`/.netlify/functions/create-checkout`);
      const checkout = await res.json();
      setCheckout(checkout[`checkout`]);
      updateCartCount(totalCheckoutQuantity(checkout[`checkout`]));
      localStorage.setItem("checkout", checkout[`checkout`].id);
    } catch (error) {
      console.error(error);
    }
  };

  const loadServerlessFunction = async () => {
    try {
      const res = await fetch("/.netlify/functions/build-client");

      const products = await res.json();
      console.log(products);
      // setProducts(products[`products`]);
      let productsArray = [];
      products[`products`].forEach((product) => {
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
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCurrentProduct = function (productHandle) {
    console.log(productHandle, productHandle.toLowerCase());
    let currentProduct = variantsAsProducts.find(
      (product) => product.handle === productHandle.toLowerCase()
    );
    if (currentProduct) {
      setProduct(currentProduct);
    }
  };

  const addItemToCheckout = async (variantId, quantity, checkoutId) => {
    let varId = variantId.replace(/=/g, "equalssymbol");
    let checkId = checkoutId.replace(/=/g, "equalssymbol");
    console.log(varId, quantity, varId);

    try {
      const res = await fetch(
        `/.netlify/functions/add-item-to-checkout?quantity=${quantity}&variantid=${varId}&checkoutid=${checkId}`
      );
      const checkout = await res.json();
      setCheckout(checkout[`checkout`]);
      setCheckoutTotalLineItems(totalCheckoutQuantity(checkout[`checkout`]));

      console.log(checkout);
    } catch (error) {
      console.error(error);
    }
  };

  const updateLineItems = async (variantId, quantity, checkoutId) => {
    let varId = variantId.replace(/=/g, "equalssymbol");
    let checkId = checkoutId.replace(/=/g, "equalssymbol");
    console.log(varId, quantity, checkId);

    try {
      const res = await fetch(
        `/.netlify/functions/update-line-items?quantity=${quantity}&variantid=${varId}&checkoutid=${checkId}`
      );
      const checkout = await res.json();
      setCheckout(checkout[`checkout`]);
      updateCartCount(totalCheckoutQuantity(checkout[`checkout`]));
      console.log(checkout);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadServerlessFunction();

    if (localStorage.checkout && localStorage.checkout !== null) {
      loadServerlessFetchCheckoutFunction(localStorage.checkout);
    } else {
      loadServerlessCreateCheckoutFunction();
    }
  }, []);

  return (
    <ShopContext.Provider
      value={{
        product: product,
        products: products,
        checkout: checkout,
        fetchCurrentProduct: fetchCurrentProduct,
        addItemToCheckout: addItemToCheckout,
        formatMoney: formatMoney,
        lowestVariantPrice: lowestVariantPrice,
        addRemoveFixedPositionOnBody: addRemoveFixedPositionOnBody,
        variantsAsProducts: variantsAsProducts,
        randomId: randomId,
        updateLineItems: updateLineItems,
        onClickBounce: onClickBounce,
        checkoutTotalLineItems: checkoutTotalLineItems,
        updateLineItemQuantity: updateLineItemQuantity,
        generateProductLink: generateProductLink,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
