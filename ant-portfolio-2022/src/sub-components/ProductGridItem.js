import "../style/sub-components/ProductGridItem.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import ProductGridItemImage from "../sub-components/ProductGridItemImage";

function ProductGridItem({ product }) {
  const { checkout, formatMoney } = useContext(ShopContext);

  return (
    <div className="ProductGridItem">
      <Link
        className="ProductGridItem__link"
        to={`/products/${product.handle}`}
      >
        <div className="ProductGridItem__content-wrapper">
          <div className="ProductGridItem__image-wrapper">
            <ProductGridItemImage
              src={product.images[0].src}
              alt={product.title}
              size={"large"}
              aspect={product.images[0].height / product.images[0].width}
              product={product}
            />
          </div>

          {/* <div className="ProductGridItem__details-wrapper">
            <div className="ProductGridItem__details-text-wrapper">
              <div className="ProductGridItem__title">{`${product.title}`}</div>
              <div className="ProductGridItem__price">
                {`${formatMoney(
                  parseFloat(product.price) * 100,
                  "${{amount}}"
                )}  ${
                  checkout.currencyCode !== undefined
                    ? checkout.currencyCode
                    : ""
                }`}
              </div>
            </div>
            <div className="ProductGridItem__view-button">
              <p className="ProductGridItem__view-button-text">View</p>
            </div>
          </div> */}
        </div>
      </Link>
    </div>
  );
}

export default ProductGridItem;
