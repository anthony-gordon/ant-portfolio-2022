export function generateLineItemOptions(item) {
  let optionsArray = [];
  item.variant.selectedOptions.forEach((option, index) => {
    let optionObject = {};
    optionObject[`option_details`] = option;
    optionObject[`key`] = index;

    optionsArray.push(optionObject);
  });
  return optionsArray;
}
