import "./../style/sub-components/AddToCartButton.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";

function AddToCartButton({
  addItemToCheckout,
  variantId,
  quantity,
  checkoutId,
}) {
  const dispatch = useDispatch();

  let { cartDisplay, checkoutUpdating } = useSelector((state) => state);
  const {
    toggleCartDisplay,
    toggleCartOpacity,
    updateCheckoutUpdating,
    updateCursorHover,
  } = bindActionCreators(actionCreators, dispatch);

  function handleAddToCart(variantId, quantity, checkoutId) {
    updateCheckoutUpdating(true);
    updateCursorHover(false);
    setTimeout(() => updateCursorHover(true), 250);
    addItemToCheckout(variantId, quantity, checkoutId).then(() => {
      updateCheckoutUpdating(false);

      toggleCartDisplayOpacity();
    });
  }

  function toggleCartDisplayOpacity() {
    if (!cartDisplay) {
      toggleCartDisplay();
      setTimeout(() => {
        toggleCartOpacity();
      }, 500);
    }
  }
  return (
    <button
      onClick={() => handleAddToCart(variantId, quantity, checkoutId)}
      onMouseEnter={() => updateCursorHover(true)}
      onMouseLeave={() => updateCursorHover(false)}
      className={`AddToCartButton ${
        checkoutUpdating ? "AddToCartButton--no-click" : ""
      }`}
    >
      <span className="AddToCartButton__text">Add to cart</span>
    </button>
  );
}

export default AddToCartButton;
