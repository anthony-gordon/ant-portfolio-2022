import "./../style/pages/ProductPage.css";
import React, { useEffect, useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Image from "../sub-components/Image";

function ProductPage() {
  let { productHandle } = useParams();
  const {
    product,
    addItemToCheckout,
    checkout,
    fetchCurrentProduct,
    getImageString,
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
          <h4 className="ProductPage__details-row-header">Title:</h4>
          <p className="ProductPage__details-row-text">{product.title}</p>
        </div>

        <div className="ProductPage__details-row">
          <h4 className="ProductPage__details-row-header">Description:</h4>
          <p className="ProductPage__details-row-text">{product.description}</p>
        </div>
        <div className="ProductPage__add-to-cart">
          <button
            onClick={() =>
              addItemToCheckout(product.variants[0].id, 1, checkout.id)
            }
            className="ProductPage__add-to-cart-button"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="ProductPage"></div>
  );
}

export default ProductPage;
