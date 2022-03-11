import "../style/sub-components/ProductGridItem.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import { ShopContext } from "../context/shopContext";
import { usePalette } from "react-palette";
import Image from "../sub-components/Image";
import QuickAddToCart from "../sub-components/QuickAddToCart";
import FadeUpAndIn from "../sub-components/FadeUpAndIn";

function ProductGridItem({ product }) {
  const { checkout, formatMoney } = useContext(ShopContext);
  const [buttonHoverStyle, setButtonHoverStyle] = useSpring(() => ({
    color: "#313131",
    backgroundColor: `transparent`,
  }));

  return (
    <FadeUpAndIn>
      <div className="ProductGridItem">
        <Link
          className="ProductGridItem__link"
          to={`/products/${product.handle}`}
        >
          <div className="ProductGridItem__content-wrapper">
            <div className="ProductGridItem__image-wrapper">
              <Image
                src={product.images[0].src}
                size={"large"}
                aspect={product.images[0].height / product.images[0].width}
                product={product}
              />
            </div>
            <QuickAddToCart />

            <div className="ProductGridItem__details-wrapper">
              <div className="ProductGridItem__details-text-wrapper">
                <div className="ProductGridItem__title">{`${product.title}`}</div>
                <div className="ProductGridItem__price">
                  {`${formatMoney(
                    parseFloat(product.variants[0].price) * 100,
                    "${{amount}}"
                  )}  ${
                    checkout.currencyCode !== undefined
                      ? checkout.currencyCode
                      : ""
                  }`}
                </div>
              </div>
              <a.div
                style={buttonHoverStyle}
                onMouseEnter={() =>
                  setButtonHoverStyle({
                    color: "white",
                    backgroundColor: `#313131`,
                  })
                }
                onMouseLeave={() =>
                  setButtonHoverStyle({
                    color: "#313131",
                    backgroundColor: `transparent`,
                  })
                }
                onClick={() =>
                  setButtonHoverStyle({
                    color: "#313131",
                    backgroundColor: `transparent`,
                  })
                }
                className="ProductGridItem__view-button"
              >
                <p className="ProductGridItem__view-button-text">View</p>
              </a.div>
            </div>
          </div>
        </Link>
      </div>
    </FadeUpAndIn>
  );
}

export default ProductGridItem;
