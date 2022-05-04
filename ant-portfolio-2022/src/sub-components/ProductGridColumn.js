import "../style/sub-components/ProductGridColumn.css";

import { useSelector } from "react-redux";
import { useContext, useEffect } from "react";

import { ProductGridContext } from "../context/productGridContext";
import ProductGridItem from "../sub-components/ProductGridItem";

function ProductGridColumn({ shortColumn, splitProductsArray }) {
  const windowSize = useSelector((state) => state.windowSize);
  const { gridItemTopBottomMargin, shortColumnExtraGridItemSpacing } =
    useContext(ProductGridContext);

  useEffect(() => {
    console.log("ProductGridColumn init");
  });

  return (
    <div
      className={`ProductGrid__column`}
      style={{
        gridRowGap: `${
          windowSize[0] < 769
            ? gridItemTopBottomMargin
            : shortColumn
            ? gridItemTopBottomMargin + shortColumnExtraGridItemSpacing
            : gridItemTopBottomMargin
        }px`,
      }}
    >
      {splitProductsArray &&
        splitProductsArray.map((product) => {
          return (
            <ProductGridItem
              key={product.variant_id}
              product={product}
              windowWidth={windowSize[0]}
            />
          );
        })}
    </div>
  );
}

export default ProductGridColumn;
