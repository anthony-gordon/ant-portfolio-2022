import "./../style/pages/ProductPage.css";
import React, { useEffect, useContext, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Image from "../sub-components/Image";
import { useSpring, animated as a } from "react-spring";

function ProductPage() {
  let { productHandle } = useParams();
  const {
    product,
    addItemToCheckout,
    checkout,
    fetchCurrentProduct,
    getImageString,
    formatMoney,
    variantsAsProducts,
  } = useContext(ShopContext);

  useEffect(() => {
    fetchCurrentProduct(productHandle);
  }, [fetchCurrentProduct, productHandle]);

  return product.title && productHandle == product.handle ? (
    <div className="ProductPage">
      <Helmet>
        <title>{`${product.title} - Anthony Gordon`}</title>
        <meta
          name="description"
          content={`"${product.title}" - an artwork by Anthony Gordon, a painter based in Wellington, New Zealand.`}
        />
      </Helmet>
      <div className="ProductPage__image-wrapper">
        <Image
          src={product.images[0].src}
          size={"large"}
          aspect={product.images[0].height / product.images[0].width}
          product={product}
        />
      </div>

      <div className="ProductPage__details">
        <div className="ProductPage__details-row">
          <h2 className="ProductPage__details-row-header">{product.title}</h2>
        </div>
        <div className="ProductPage__details-row">
          <div className="ProductGridItem__price">
            {`${formatMoney(parseFloat(product.price) * 100, "${{amount}}")}  ${
              checkout.currencyCode !== undefined ? checkout.currencyCode : ""
            }`}
          </div>
        </div>
        <div className="ProductPage__details-row">
          <p className="ProductPage__details-row-text">{product.description}</p>
        </div>
        <div className="ProductPage__add-to-cart">
          <button className="ProductPage__add-to-cart-button">
            <span className="ProductPage__add-to-cart-text">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="ProductPage"></div>
  );
}

export default ProductPage;
