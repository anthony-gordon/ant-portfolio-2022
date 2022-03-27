export function updateLineItemQuantity(
  variantId,
  quantity,
  checkoutId,
  updateCheckoutUpdating,
  updateCursorHover,
  updateLineItems
) {
  updateCheckoutUpdating(true);
  updateCursorHover(false);
  setTimeout(() => updateCursorHover(true), 250);
  updateLineItems(variantId, quantity, checkoutId).then(() => {
    updateCheckoutUpdating(false);
  });
}
