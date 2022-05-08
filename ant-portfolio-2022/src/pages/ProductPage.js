import "./../style/pages/ProductPage.css";

import React, { useEffect, useContext } from "react";
import { animated as a } from "react-spring";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import AddToCartButton from "../sub-components/AddToCartButton";
import ProductPageImage from "../sub-components/ProductPageImage";

import { ShopContext } from "../context/shopContext";
import { LayoutContext } from "../context/layoutContext";

function ProductPage() {
  let { productHandle } = useParams();
  const {
    product,
    addItemToCheckout,
    checkout,
    fetchCurrentProduct,
    formatMoney,
  } = useContext(ShopContext);
  const { y } = useContext(LayoutContext);

  useEffect(() => {
    fetchCurrentProduct(productHandle);
  }, [fetchCurrentProduct, productHandle]);

  return product.title && productHandle === product.handle ? (
    <a.div
      style={{
        transform: y.to((y) => `translateY(${y}px)`),
      }}
      className="ProductPage"
    >
      <Helmet>
        <title>{`${product.title} - Anthony Gordon`}</title>
        <meta
          name="description"
          content={`"${product.title}" - an artwork by Anthony Gordon, a painter based in Wellington, New Zealand.`}
        />
      </Helmet>
      <div className="ProductPage__image-wrapper">
        <ProductPageImage
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
          <AddToCartButton
            addItemToCheckout={addItemToCheckout}
            variantId={product.variant_id}
            quantity={1}
            checkoutId={checkout.id}
          />
        </div>
      </div>
    </a.div>
  ) : (
    <div className="ProductPage"></div>
  );
}

export default ProductPage;
