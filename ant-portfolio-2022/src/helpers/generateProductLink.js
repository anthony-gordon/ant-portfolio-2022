export function generateProductLink(handle, variantTitle) {
  let link = `/products/${handle}${
    variantTitle !== "Default Title" ? "-" : ""
  }${
    variantTitle !== "Default Title"
      ? variantTitle.toLowerCase().replace(/ /g, "-")
      : ""
  }`;
  return link;
}
