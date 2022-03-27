import "../style/sub-components/CartLineItemQuantityUpdate.css";

import { actionCreators } from "./../state/index";
import { ShopContext } from "../context/shopContext";

import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

function CartLineItemQuantityUpdate({ item }) {
  const { checkout, updateLineItems, updateLineItemQuantity } =
    useContext(ShopContext);
  const dispatch = useDispatch();
  let { checkoutUpdating } = useSelector((state) => state);
  const { updateCursorHover, updateCheckoutUpdating } = bindActionCreators(
    actionCreators,
    dispatch
  );

  function handleClick(number) {
    updateLineItemQuantity(
      item.id,
      item.quantity + number,
      checkout.id,
      updateCheckoutUpdating,
      updateCursorHover,
      updateLineItems
    );
  }

  return (
    <div
      onMouseEnter={() => updateCursorHover(true)}
      onMouseLeave={() => updateCursorHover(false)}
      className="CartLineItemQuantityUpdate"
    >
      <button
        onClick={() => handleClick(-1)}
        className={`CartLineItemQuantityUpdate__decrease ${
          checkoutUpdating
            ? "CartLineItemQuantityUpdate__increase--no-click"
            : ""
        }`}
      >
        -
      </button>
      <span>{item.quantity}</span>
      <button
        onClick={() => handleClick(1)}
        className={`CartLineItemQuantityUpdate__increase ${
          checkoutUpdating
            ? "CartLineItemQuantityUpdate__decrease--no-click"
            : ""
        }`}
      >
        +
      </button>
    </div>
  );
}

export default CartLineItemQuantityUpdate;
