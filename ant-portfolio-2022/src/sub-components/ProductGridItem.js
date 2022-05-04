import "../style/sub-components/ProductGridItem.css";
import { Link } from "react-router-dom";
import ProductGridItemImage from "../sub-components/ProductGridItemImage";
import { settings } from "../context/settings";

function ProductGridItem({ product, windowWidth }) {
  const { mobile_breakpoint } = settings.layout;
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
              size={`${windowWidth > mobile_breakpoint ? "large" : "800x800"}`}
              aspect={product.images[0].height / product.images[0].width}
              product={product}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductGridItem;
