import "../style/sub-components/CartLineItemQuantityUpdate.css";

import { ShopContext } from "../context/shopContext";

import { useContext, useMemo } from "react";
import { useSelector, shallowEqual } from "react-redux";

import useUpdateLineItemQuantity from "../hooks/useUpdateLineItemQuantity";
import useSetCursorHover from "../hooks/useSetCursorHover";

function CartLineItemQuantityUpdate({ item }) {
  const { checkout } = useContext(ShopContext);

  const { updateLineItemQuantity } = useUpdateLineItemQuantity();
  const { setCursorHover } = useSetCursorHover();

  let checkoutUpdating = useSelector(
    (state) => state.checkoutUpdating,
    shallowEqual
  );

  return useMemo(() => {
    return (
      <div
        onMouseEnter={() => setCursorHover(true)}
        onMouseLeave={() => setCursorHover(false)}
        className="CartLineItemQuantityUpdate"
      >
        <button
          onClick={() =>
            updateLineItemQuantity(item.id, item.quantity, -1, checkout.id)
          }
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
          onClick={() =>
            updateLineItemQuantity(item.id, item.quantity, 1, checkout.id)
          }
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
  }, [checkoutUpdating]);
}

export default CartLineItemQuantityUpdate;
