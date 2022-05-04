export function dividedSplitProducts(productList) {
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
}
