import "../style/sub-components/ProductGridItemImage.css";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";

function ProductGridItemImage({ src, size, aspect, alt }) {
  const { getImageString } = useContext(ShopContext);

  return (
    <div className="ProductGridItemImage">
      <div className="ProductGridItemImage__wrapper">
        <img
          alt={alt}
          className={`ProductGridItemImage__image ${
            aspect > 1
              ? "ProductGridItemImage__image--set-max-height"
              : "ProductGridItemImage__image--set-max-width"
          }`}
          src={getImageString(src, size)}
        />
      </div>
    </div>
  );
}

export default ProductGridItemImage;
