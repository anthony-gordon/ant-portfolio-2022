import "../style/sub-components/ProductGridItemImage.css";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function ProductGridItemImage({ src, size, aspect, alt }) {
  const { getImageString } = useContext(ShopContext);
  const dispatch = useDispatch();
  const { updateCursorHover } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="ProductGridItemImage">
      <div className="ProductGridItemImage__wrapper">
        <div
          className={`ProductGridItemImage__sub-wrapper ${
            aspect > 1
              ? "ProductGridItemImage__sub-wrapper--set-max-height"
              : "ProductGridItemImage__sub-wrapper--set-max-width"
          }`}
          style={{
            width: `${aspect < 1 ? 100 : 100 / aspect}%`,
            paddingBottom: `${aspect > 1 ? 100 : 100 * aspect}%`,
          }}
        >
          <img
            alt={alt}
            onMouseEnter={() => updateCursorHover(true)}
            onMouseLeave={() => updateCursorHover(false)}
            onClick={() => updateCursorHover(false)}
            className={`ProductGridItemImage__image ${
              aspect > 1
                ? "ProductGridItemImage__image--set-max-height"
                : "ProductGridItemImage__image--set-max-width"
            }`}
            src={getImageString(src, size)}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductGridItemImage;
