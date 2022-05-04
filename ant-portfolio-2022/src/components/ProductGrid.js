import "../style/components/ProductGrid.css";

import { useSelector, shallowEqual } from "react-redux";
import { useContext, useEffect } from "react";
import { animated as a } from "react-spring";

import { LayoutContext } from "../context/layoutContext";
import ProductGridColumnWrapper from "../sub-components/ProductGridColumnWrapper";
import { ProductGridContext } from "../context/productGridContext";

import { helpers } from "../helpers/helpersIndex";
import { settings } from "../context/settings";

function ProductGrid() {
  const { mobile_breakpoint } = settings.layout;
  const windowSize = useSelector((state) => state.windowSize, shallowEqual);

  const { y } = useContext(LayoutContext);
  const { productList, splitProducts } = useContext(ProductGridContext);

  const { gridScroll } = helpers;

  const { gridDesktopColumns, determineShortColumn } = gridScroll;

  useEffect(() => {
    console.log("product grid init");
  });
  return (
    <a.div
      style={{
        transform: y.to(
          (y) =>
            `translate(0px,${windowSize[0] > mobile_breakpoint - 1 ? 0 : y}px) `
        ),
        perspective: `${
          windowSize[0] > mobile_breakpoint - 1 ? `1000px` : `none`
        }`,
      }}
      className={`ProductGrid`}
    >
      {splitProducts.map((splitProductsArray, index) => {
        let shortColumn = determineShortColumn(
          productList.length,
          gridDesktopColumns,
          index
        );
        return (
          <ProductGridColumnWrapper
            key={index}
            splitProductsArray={splitProductsArray}
            index={index}
            shortColumn={shortColumn}
          />
        );
      })}
    </a.div>
  );
}
export default ProductGrid;
