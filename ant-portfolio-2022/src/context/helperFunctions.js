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

export function totalCheckoutQuantity(checkout) {
  if (checkout && checkout.lineItems && checkout.lineItems.length > 0) {
    let totalCheckoutLineItemQuantity = 0;
    checkout.lineItems.forEach((lineItem) => {
      totalCheckoutLineItemQuantity += lineItem.quantity;
    });
    return totalCheckoutLineItemQuantity;
  } else {
    return 0;
  }
}

export function onClickBounce(setHover, booleanOne, booleanTwo) {
  console.log(setHover, booleanOne, booleanTwo);
  setHover(booleanOne);
  setTimeout(setHover(booleanTwo), 250);
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

export function addRemoveFixedPositionOnBody(addOrRemove, windowHeight) {
  const body = document.querySelector("body");
  let vs = body.scrollHeight > windowHeight;
  console.log("vs", body.scrollHeight, windowHeight);
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
