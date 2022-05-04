import "../style/sub-components/CartLineItem.css";

import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";

import { helpers } from "./../helpers/helpersIndex";
import { ShopContext } from "../context/shopContext";
import CartLineItemQuantityUpdate from "./CartLineItemQuantityUpdate";
import CartLineItemDetails from "./CartLineItemDetails";

function CartLineItem({ item, index }) {
  let cartDisplay = useSelector((state) => state.cartDisplay);

  const [visible, setVisible] = useState(false);
  const { checkout } = useContext(ShopContext);
  const { formatMoney } = helpers;

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
        {checkout &&
          `${formatMoney(
            parseFloat(item.variant.price * item.quantity) * 100,
            "${{amount}}"
          )}  ${checkout.currencyCode}`}
      </td>
    </tr>
  );
}

export default CartLineItem;
