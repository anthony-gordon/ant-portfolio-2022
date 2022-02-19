import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import SiteRoutes from "./SiteRoutes";
import Client from "shopify-buy";

function AnthonyPortfolioSite() {
  const dispatch = useDispatch();
  const {
    updateWindowSize,
    updateCheckout,
    updateProducts,
    updateClient,
    updateProduct,
  } = bindActionCreators(actionCreators, dispatch);

  const client = Client.buildClient({
    domain: "lay-z-boy-1993.myshopify.com",
    storefrontAccessToken: "0aa1140efd450ddf2fd717f0de9b0e12",
  });

  const createCheckout = function () {
    client.checkout.create().then((checkout) => {
      updateCheckout(checkout);
    });
  };

  function fetchAllProducts() {
    client.product.fetchAll().then((products) => {
      updateProducts(products);
      if (getParam()) {
        isValidPathName(getParam(), products);
      }
    });
  }

  function isValidPathName(param, products) {
    let currentProduct = products.find(
      (product) => product.handle === param.toLowerCase()
    );
    if (currentProduct) {
      client.product.fetch(currentProduct.id).then((product) => {
        updateProduct(product);
      });
    }
  }

  function getParam() {
    let pathName = window.location.pathname;
    if (pathName.includes("/products/")) {
      let param = pathName
        .split("/products/")
        .filter((n) => n)[0]
        .split("/")[0];
      return param;
    }
    return null;
  }

  useEffect(() => {
    updateClient(client);
    createCheckout();
    fetchAllProducts();
  }, []);

  useLayoutEffect(() => {
    function updateSize() {
      updateWindowSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  });

  return (
    <div className="AnthonyPortfolioSite">
      <NavBar />
      <NavMenu />
      <SiteRoutes />
      <Footer />
    </div>
  );
}

export default AnthonyPortfolioSite;
