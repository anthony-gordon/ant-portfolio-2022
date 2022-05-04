import "./../style/sub-components/CartFooter.css";
import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import CartCheckoutButton from "../sub-components/CartCheckoutButton";

import { helpers } from "./../helpers/helpersIndex";
import { strings } from "./../context/strings";

export default function CartFooter() {
  const { checkout } = useContext(ShopContext);
  const { formatMoney } = helpers;

  useEffect(() => {
    console.log("cart footer re-render", strings);
  });

  return (
    <div className="CartFooter">
      <div className="CartFooter__content-wrapper">
        <div className="CartFooter__subtotal">
          <p className="CartFooter__subtotal-header">{`${strings.cart.subtotal}`}</p>
          <p className="CartFooter__subtotal-price">
            {checkout &&
              `${formatMoney(
                parseFloat(checkout.subtotalPrice) * 100,
                "${{amount}}"
              )}  ${checkout.currencyCode}`}
          </p>
        </div>
        <p className="CartFooter__tax-shipping-note">
          {`${strings.cart.tax_shipping_note}`}
        </p>
        <CartCheckoutButton />
      </div>
    </div>
  );
}
