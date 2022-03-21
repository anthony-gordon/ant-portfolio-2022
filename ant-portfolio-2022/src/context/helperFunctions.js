export function formatMoney(cents, format) {
  if (typeof cents == "string") {
    cents = cents.replace(".", "");
  }
  var value = "";
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = format || this.money_format;

  function defaultOption(opt, def) {
    return typeof opt == "undefined" ? def : opt;
  }

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ",");
    decimal = defaultOption(decimal, ".");

    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);

    var parts = number.split("."),
      dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + thousands),
      cents = parts[1] ? decimal + parts[1] : "";

    return dollars + cents;
  }

  switch (formatString.match(placeholderRegex)[1]) {
    case "amount":
      value = formatWithDelimiters(cents, 2);
      break;
    case "amount_no_decimals":
      value = formatWithDelimiters(cents, 0);
      break;
    case "amount_with_comma_separator":
      value = formatWithDelimiters(cents, 2, ".", ",");
      break;
    case "amount_no_decimals_with_comma_separator":
      value = formatWithDelimiters(cents, 0, ".", ",");
      break;
    default:
      value = value = formatWithDelimiters(cents, 2);
  }

  return formatString.replace(placeholderRegex, value);
}

export function lowestVariantPrice() {
  return;
}

export function getImageString(src, size) {
  return src
    .replace(
      /_(pico|icon|thumb|small|compact|medium|large|grande|original|1024x1024|2048x2048|master)+\./g,
      "."
    )
    .replace(/\.jpg|\.png|\.gif|\.jpeg/g, function (match) {
      return "_" + size + match;
    });
}

export function addRemoveFixedPositionOnBody(addOrRemove) {
  const body = document.querySelector("body");
  let vs = body.scrollHeight > body.clientHeight;
  console.log("vs", vs);
  if (
    vs &&
    addOrRemove === "add" &&
    !body.classList.contains("body__no-scroll")
  ) {
    body.classList.add("body__no-scroll");
  } else if (
    addOrRemove === "remove" &&
    body.classList.contains("body__no-scroll")
  ) {
    body.classList.remove("body__no-scroll");
  }
}

export function randomId() {
  let prefix = "key_";
  return Math.random()
    .toString(36)
    .replace("0.", prefix || "");
}

export const gridScrollHelpers = {
  gridItemDesktopLargeHeight: 600,
  gridItemDesktopHeight: 400,
  gridItemTabletHeight: 256.33333,
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
    console.log(
      "y, YOffset, productGridScrollHeight",
      y,
      YOffset,
      productGridScrollHeight
    );
    let difference =
      YOffset === 0 && y === 0
        ? 1
        : (YOffset + productGridScrollHeight) / (-y + productGridScrollHeight);
    console.log("difference", difference);
    let degs = (difference - 1) * 20;
    return degs;
  },
  getProductGridStartingPosition: function (
    gridItemHeight,
    windowHeight,
    gridItemTopBottomMargin,
    headerFooterHeight
  ) {
    console.log(
      "starting",
      gridItemHeight,
      windowHeight,
      gridItemTopBottomMargin,
      headerFooterHeight
    );
    // let productGridStartingPosition =
    //   gridItemHeight > windowHeight ? 0 : (windowHeight - gridItemHeight) / 2;
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
    console.log(gridItemTopBottomMargin, gridItemHeight, numberOfRows);
    console.log("firing");
    let shortColumnExtraGridItemSpacing =
      (gridItemTopBottomMargin + gridItemHeight) / (numberOfRows - 2);
    console.log(
      "shortColumnExtraGridItemSpacing",
      shortColumnExtraGridItemSpacing
    );
    return shortColumnExtraGridItemSpacing;
  },
  getYTransform: function (
    index,
    y,
    productGridStartingPosition,
    productGridScrollHeight
  ) {
    console.log("Y", y, productGridStartingPosition, productGridScrollHeight);
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
