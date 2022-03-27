import "../style/sub-components/CartLineItem.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";
import { ShopContext } from "../context/shopContext";
import CartLineItemQuantityUpdate from "./CartLineItemQuantityUpdate";
import CartLineItemDetails from "./CartLineItemDetails";

function CartLineItem({ item, index }) {
  const { getImageString, randomId, checkout, updateLineItems } =
    useContext(ShopContext);
  const [lineItemOptions] = useState(generateOptions());
  const dispatch = useDispatch();
  let { cartDisplay, checkoutUpdating } = useSelector((state) => state);
  const {
    toggleCartDisplay,
    toggleCartOpacity,
    updateCursorHover,
    updateCheckoutUpdating,
  } = bindActionCreators(actionCreators, dispatch);

  const [visible, setVisible] = useState(false);

  function handleUpdateLineItems(variantId, quantity, checkoutId) {
    updateCheckoutUpdating(true);
    updateCursorHover(false);
    setTimeout(() => updateCursorHover(true), 250);
    updateLineItems(variantId, quantity, checkoutId).then(() => {
      updateCheckoutUpdating(false);
    });
  }

  function generateOptions() {
    let optionsArray = [];
    item.variant.selectedOptions.forEach((option) => {
      let optionObject = {};
      optionObject[`option_details`] = option;
      optionObject[`key`] = randomId();

      optionsArray.push(optionObject);
    });
    return optionsArray;
  }

  function toggleCartDisplayOpacity() {
    if (!cartDisplay) {
      toggleCartDisplay();
      setTimeout(() => {
        toggleCartOpacity();
      }, 10);
    } else if (cartDisplay) {
      toggleCartOpacity();
      setTimeout(() => {
        toggleCartDisplay();
      }, 500);
    }
  }

  useEffect(() => {
    if (cartDisplay) {
      setTimeout(() => {
        setVisible(true);
      }, 100 + 200 * index);
    } else {
      setVisible(false);
    }
  }, [cartDisplay, index]);

  return (
    <tr
      className={`CartLineItem ${visible ? "CartLineItem__li--visible" : ""}`}
    >
      <td className="CartLineItem__product-wrapper">
        <CartLineItemDetails item={item} />
      </td>
      <td className="CartLineItem__quantity-wrapper">
        <CartLineItemQuantityUpdate item={item} />
      </td>

      <td className="CartLineItem__total-wrapper">
        {`$${(item.variant.price * item.quantity).toFixed(2)} NZ`}
      </td>
    </tr>
  );
}

export default CartLineItem;
