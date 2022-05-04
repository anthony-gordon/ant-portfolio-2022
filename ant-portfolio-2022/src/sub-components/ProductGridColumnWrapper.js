import "../style/sub-components/ProductGridColumnWrapper.css";

import { useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { animated as a } from "react-spring";

import { LayoutContext } from "../context/layoutContext";
import { ProductGridContext } from "../context/productGridContext";

import ProductGridColumn from "./ProductGridColumn";

function ProductGridColumnWrapper({ splitProductsArray, index, shortColumn }) {
  const windowSize = useSelector((state) => state.windowSize);
  const YOffset = useSelector((state) => state.YOffset);
  const {
    getYTransform,
    productGridStartingPosition,
    productGridScrollHeight,
    getXRotate,
  } = useContext(ProductGridContext);

  const { y } = useContext(LayoutContext);

  useEffect(() => {
    console.log("ProductGridColumnWrapper init");
  });

  return (
    <a.div
      style={{
        transform: y.to(
          (y) =>
            `translateY(${
              windowSize[0] < 769
                ? 0
                : getYTransform(
                    index,
                    y,
                    productGridStartingPosition,
                    productGridScrollHeight
                  )
            }px) rotateX(${getXRotate(
              y,
              YOffset,
              productGridScrollHeight
            )}deg) `
        ),
      }}
      className={`ProductGrid__column-wrapper `}
    >
      <ProductGridColumn
        splitProductsArray={splitProductsArray}
        shortColumn={shortColumn}
      />
    </a.div>
  );
}

export default ProductGridColumnWrapper;
