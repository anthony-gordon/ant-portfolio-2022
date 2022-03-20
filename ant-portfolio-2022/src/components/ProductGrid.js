import "../style/components/ProductGrid.css";
import ProductGridItem from "../sub-components/ProductGridItem";
import { useState, useContext, useEffect } from "react";
import { animated as a, useSpring } from "react-spring";
import { ShopContext } from "../context/shopContext";
import { useSelector } from "react-redux";

function ProductGrid({ productList }) {
  const { windowSize } = useSelector((state) => state);

  const { y, gridScrollHelpers } = useContext(ShopContext);
  const {
    gridItemDesktopHeight,
    gridItemTabletHeight,
    gridItemTopBottomMargin,
    gridDesktopColumns,
    getNumberOfRows,
    getProductGridHeight,
    getProductGridScrollHeight,
    getProductGridStartingPosition,
    getYTransform,
    determineShortColumn,
    getShortColumnExtraGridItemSpacing,
  } = gridScrollHelpers;

  const [numberOfRows] = useState(
    getNumberOfRows(productList.length, gridDesktopColumns)
  );

  const [gridItemHeight, setGridItemHeight] = useState(
    windowSize[0] < 1200 ? gridItemTabletHeight : gridItemDesktopHeight
  );

  const [shortColumnExtraGridItemSpacing, setShortColumnExtraGridItemSpacing] =
    useState(
      getShortColumnExtraGridItemSpacing(
        gridItemTopBottomMargin,
        gridItemHeight,
        numberOfRows
      )
    );

  const [productGridScrollHeight, setProductGridScrollHeight] = useState(
    getProductGridScrollHeight(
      numberOfRows,
      gridItemTopBottomMargin,
      gridItemHeight,
      windowSize[1]
    )
  );

  const [productGridStartingPosition, setProductGridStartingPosition] =
    useState(getProductGridStartingPosition(gridItemHeight, windowSize[1]));

  useEffect(() => {
    setGridItemHeight(
      windowSize[0] < 1200 ? gridItemTabletHeight : gridItemDesktopHeight
    );
  }, [windowSize]);

  useEffect(() => {
    console.log("setting");
    setShortColumnExtraGridItemSpacing(
      getShortColumnExtraGridItemSpacing(
        gridItemTopBottomMargin,
        gridItemHeight,
        numberOfRows
      )
    );
    setProductGridStartingPosition(
      getProductGridStartingPosition(gridItemHeight, windowSize[1])
    );
    setProductGridScrollHeight(
      getProductGridScrollHeight(
        numberOfRows,
        gridItemTopBottomMargin,
        gridItemHeight,
        windowSize[1]
      )
    );
  }, [gridItemHeight]);

  const dividedSplitProducts = function (productList) {
    let splitProducts = [[], [], []];

    productList.forEach((product, index) => {
      if (index % 3 === 0) {
        splitProducts[`${0}`].push(product);
      } else if (index % 3 === 1) {
        splitProducts[`${1}`].push(product);
      } else {
        splitProducts[`${2}`].push(product);
      }
    });
    return splitProducts;
  };
  const [splitProducts] = useState(dividedSplitProducts(productList));

  return (
    <a.div
      style={{
        transform: y.to(
          (y) => `translate(0px,${windowSize[0] > 768 ? 0 : y}px) `
        ),
      }}
      className="ProductGrid"
    >
      {splitProducts.map((splitProductsArray, index) => {
        let shortColumn = determineShortColumn(
          productList.length,
          gridDesktopColumns,
          index
        );
        return (
          <a.div
            style={{
              transform: y.to(
                (y) =>
                  `translate(0px,${
                    windowSize[0] < 769
                      ? 0
                      : getYTransform(
                          index,
                          y,
                          productGridStartingPosition,
                          productGridScrollHeight
                        )
                  }px) `
              ),
            }}
            className={`ProductGrid__column-wrapper `}
          >
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
                    />
                  );
                })}
            </div>
          </a.div>
        );
      })}
    </a.div>
  );
}
export default ProductGrid;
