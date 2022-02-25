import "../style/sub-components/ProductGridItem.css";
import { Link } from "react-router-dom";
import { useSpring, animated as a } from "react-spring";
import { ShopContext } from "../context/shopContext";

function ProductGridItem({ product }) {
  const [hoverOpacity, setHoverOpacity] = useSpring(() => ({
    opacity: 0,
  }));
  return (
    <div className="ProductGridItem">
      <Link
        className="ProductGridItem__link"
        to={`/products/${product.handle}`}
      >
        <div>
          <img className="ProductGridItem__image" src={product.images[0].src} />
          <a.div
            onMouseEnter={() =>
              setHoverOpacity({
                opacity: 1,
              })
            }
            onMouseLeave={() =>
              setHoverOpacity({
                opacity: 0,
              })
            }
            style={hoverOpacity}
            className="ProductGridItem__title-wrapper"
          >
            <h2 className="ProductGridItem__title">{product.title}</h2>
          </a.div>
          <div className="ProductGridItem__caption">{`${product.title}`}</div>
        </div>
      </Link>
    </div>
  );
}

export default ProductGridItem;
