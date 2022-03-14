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

  let { cartDisplay } = useSelector((state) => state);
  const { toggleCartDisplay, toggleCartOpacity } = bindActionCreators(
    actionCreators,
    dispatch
  );

  function handleAddToCart(variantId, quantity, checkoutId) {
    addItemToCheckout(variantId, quantity, checkoutId).then(() => {
      setTimeout(toggleCartDisplayOpacity(), 500);
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
      className="AddToCartButton"
    >
      <span className="AddToCartButton__text">Add to cart</span>
    </button>
  );
}

export default AddToCartButton;
