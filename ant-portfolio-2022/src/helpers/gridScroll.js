export const gridScroll = {
  gridItemDesktopLargeHeight: 550,
  gridItemDesktopHeight: 366.666666666,
  desktopPageMargin: 50,
  gridItemTopBottomMargin: 80,
  gridDesktopColumns: 3,
  headerFooterHeight: 100,
  getNumberOfRows: function (productListLength, gridDesktopColumns) {
    let numberOfRows =
      (productListLength +
        (gridDesktopColumns - (productListLength % gridDesktopColumns))) /
      gridDesktopColumns;
    return numberOfRows;
  },
  getProductGridScrollHeight: function (
    numberOfRows,
    gridItemTopBottomMargin,
    gridItemHeight,
    windowHeight
  ) {
    let productGridHeight =
      (numberOfRows - 1) * gridItemTopBottomMargin +
      numberOfRows * gridItemHeight -
      windowHeight;
    return productGridHeight;
  },
  getXRotate: function (y, YOffset, productGridScrollHeight) {
    let difference =
      YOffset === 0 && y === 0
        ? 1
        : (YOffset + productGridScrollHeight) / (-y + productGridScrollHeight);
    // console.log("difference", difference);
    let degs = (difference - 1) * 20;
    return degs;
  },
  getProductGridStartingPosition: function (
    gridItemHeight,
    windowHeight,
    gridItemTopBottomMargin,
    headerFooterHeight
  ) {
    let productGridStartingPosition =
      gridItemHeight + headerFooterHeight > windowHeight
        ? headerFooterHeight
        : gridItemTopBottomMargin + headerFooterHeight;
    return productGridStartingPosition;
  },
  getProductGridHeight: function (
    numberOfRows,
    gridItemTopBottomMargin,
    gridItemHeight
  ) {
    let productGridHeight =
      (numberOfRows - 1) * gridItemTopBottomMargin +
      numberOfRows * gridItemHeight;
    return productGridHeight;
  },
  getShortColumnExtraGridItemSpacing: function (
    gridItemTopBottomMargin,
    gridItemHeight,
    numberOfRows
  ) {
    let shortColumnExtraGridItemSpacing =
      (gridItemTopBottomMargin + gridItemHeight) / (numberOfRows - 2);
    return shortColumnExtraGridItemSpacing;
  },
  getYTransform: function (
    index,
    y,
    productGridStartingPosition,
    productGridScrollHeight
  ) {
    let yTransform =
      index !== 1
        ? y +
          productGridStartingPosition *
            (1 - (0 - y) / productGridScrollHeight) -
          productGridStartingPosition * ((0 - y) / productGridScrollHeight)
        : -productGridScrollHeight -
          y +
          productGridStartingPosition * ((0 - y) / productGridScrollHeight) -
          productGridStartingPosition * (1 - (0 - y) / productGridScrollHeight);
    return yTransform;
  },
  determineShortColumn: function (
    productListLength,
    gridDesktopColumns,
    index
  ) {
    let amountOfShortColumns =
      gridDesktopColumns - (productListLength % gridDesktopColumns);
    const shortColumn =
      amountOfShortColumns > 0 &&
      index >= gridDesktopColumns - amountOfShortColumns;

    return shortColumn;
  },
};
