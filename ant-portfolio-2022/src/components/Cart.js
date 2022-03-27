import "./../style/components/Cart.css";
import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { useSelector, useDispatch } from "react-redux";
import CartTable from "./../sub-components/CartTable";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";

function Cart() {
  const dispatch = useDispatch();

  const { updateCursorHover } = bindActionCreators(actionCreators, dispatch);

  let { scrollBarWidth, navBarHeight, cartOpacity, cartDisplay } = useSelector(
    (state) => state
  );
  const { checkout, strings, formatMoney } = useContext(ShopContext);

  return (
    <>
      <div
        tabIndex={-1}
        className={`Cart__underlay ${
          cartOpacity ? "Cart__underlay--visible" : ""
        } ${cartDisplay ? "Cart__underlay--displaying" : ""}`}
      ></div>
      <div
        style={{
          paddingRight: `${scrollBarWidth}px`,
          paddingTop: `${navBarHeight}px`,
        }}
        className={`Cart ${cartOpacity ? "Cart--visible" : ""} ${
          cartDisplay ? "Cart--active" : ""
        }`}
      >
        <div className="Cart__content-wrapper">
          <CartTable />
          <div className="Cart__footer">
            <div className="Cart__footer-content-wrapper">
              <div className="Cart__footer-subtotal">
                <p className="Cart__footer-subtotal-header">Subtotal</p>
                <p className="Cart__footer-subtotal-price">
                  {checkout &&
                    `${formatMoney(
                      parseFloat(checkout.subtotalPrice) * 100,
                      "${{amount}}"
                    )}  ${checkout.currencyCode}`}
                </p>
              </div>
              <p className="Cart__footer-tax-shipping-note">
                {`${strings.cart.tax_shipping_note}`}
              </p>
              <a
                href={checkout && checkout.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="Cart__footer-checkout"
              >
                <button
                  onMouseEnter={() => updateCursorHover(true)}
                  onMouseLeave={() => updateCursorHover(false)}
                  onClick={() => updateCursorHover(false)}
                  className="Cart__footer-checkout-button"
                >
                  <span>Checkout</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
