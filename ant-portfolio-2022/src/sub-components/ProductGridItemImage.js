import "../style/sub-components/ProductGridItemImage.css";
import { helpers } from "./../helpers/helpersIndex";
import useSetCursorHover from "../hooks/useSetCursorHover";

function ProductGridItemImage({ src, size, aspect, alt }) {
  const { setCursorHover } = useSetCursorHover();

  const { getImageString } = helpers;
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
            onMouseEnter={() => setCursorHover(true)}
            onMouseLeave={() => setCursorHover(false)}
            onClick={() => setCursorHover(false)}
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
