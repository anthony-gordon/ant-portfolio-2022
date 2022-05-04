import { useEffect, useContext, useState } from "react";
import { animated as a, useSpring } from "react-spring";
import React, { useLayoutEffect } from "react";
import { helpers } from "../helpers/helpersIndex";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import useSetFixedPositionBody from "../hooks/useSetFixedPositionBody";
import { settings } from "./settings";

const ProductGridContext = React.createContext();

function ProductGridProvider({ children, productList }) {
  const windowSize = useSelector((state) => state.windowSize);

  const { gridScroll, dividedSplitProducts } = helpers;

  const {
    gridItemDesktopHeight,
    desktopPageMargin,
    gridItemTopBottomMargin,
    gridDesktopColumns,
    getNumberOfRows,
    getProductGridScrollHeight,
    getProductGridStartingPosition,
    getYTransform,
    getShortColumnExtraGridItemSpacing,
    headerFooterHeight,
    getXRotate,
  } = gridScroll;

  const [gridItemTabletHeight, setGridItemTabletHeight] = useState(
    (windowSize[0] - desktopPageMargin - desktopPageMargin) / gridDesktopColumns
  );

  const [numberOfRows] = useState(
    getNumberOfRows(productList.length, gridDesktopColumns)
  );

  const [gridItemHeight, setGridItemHeight] = useState(
    windowSize[0] < settings.page_max_width
      ? gridItemTabletHeight
      : gridItemDesktopHeight
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
    useState(
      getProductGridStartingPosition(
        gridItemHeight,
        windowSize[1],
        gridItemTopBottomMargin,
        headerFooterHeight
      )
    );

  const [splitProducts] = useState(dividedSplitProducts(productList));

  useEffect(() => {
    setGridItemTabletHeight(
      (windowSize[0] - desktopPageMargin - desktopPageMargin) /
        gridDesktopColumns
    );
  }, [windowSize]);

  useEffect(() => {
    setGridItemHeight(
      windowSize[0] < settings.page_max_width
        ? gridItemTabletHeight
        : gridItemDesktopHeight
    );
  }, [gridItemTabletHeight, windowSize]);

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
      getProductGridStartingPosition(
        gridItemHeight,
        windowSize[1],
        gridItemTopBottomMargin,
        headerFooterHeight
      )
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

  return (
    <ProductGridContext.Provider
      value={{
        productList: productList,
        shortColumnExtraGridItemSpacing: shortColumnExtraGridItemSpacing,
        gridItemHeight: gridItemHeight,
        productGridScrollHeight: productGridScrollHeight,
        productGridStartingPosition: productGridStartingPosition,
        splitProducts: splitProducts,
        getYTransform: getYTransform,
        getXRotate: getXRotate,
        gridItemTopBottomMargin: gridItemTopBottomMargin,
      }}
    >
      {children}
    </ProductGridContext.Provider>
  );
}

export { ProductGridContext };

export default ProductGridProvider;
