import "./../style/components/Cart.css";
import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { useSelector, useDispatch } from "react-redux";
import CartLineItem from "./../sub-components/CartLineItem";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";
import CartCloseIcon from "./../sub-components/CartCloseIcon";

function Cart() {
  const dispatch = useDispatch();

  const { toggleCartDisplay, toggleCartOpacity } = bindActionCreators(
    actionCreators,
    dispatch
  );

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
        onClick={toggleCartDisplayOpacity}
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
          <div className="Cart__header">
            <div className="Cart__header-text-wrapper">
              <h2 className="Cart__header-text">
                Cart
                <span className="Cart__header-text-cart-count">
                  {checkout.lineItems && checkout.lineItems.length > 0
                    ? ` - ${checkout.lineItems.length}`
                    : ""}
                </span>
              </h2>
            </div>

            <CartCloseIcon
              cartDisplay={cartDisplay}
              cartOpacity={cartOpacity}
              toggleCartDisplayOpacity={toggleCartDisplayOpacity}
            />
          </div>
          <table className="Cart__table">
            <thead className="Cart_table-header">
              <tr>
                <th
                  className="Cart_table-header-cell-product"
                  scope="col"
                  colSpan="2"
                >
                  Product
                </th>
                <th
                  className="Cart_table-header-cell-quantity"
                  scope="col"
                  colSpan="1"
                >
                  Quantity
                </th>
                <th
                  className="Cart_table-header-cell-total"
                  scope="col"
                  colSpan="1"
                >
                  Total
                </th>
              </tr>
            </thead>

            <tbody className="Cart__table-body">
              {checkout.lineItems &&
                checkout.lineItems.map((item) => {
                  return <CartLineItem key={item.id} item={item} />;
                })}
            </tbody>
          </table>
          <hr className="Cart__hr" />
          <div className="Cart__footer">
            <div className="Cart__footer-subtotal">
              <h3 className="Cart__footer-subtotal-header">Subtotal</h3>
              <p className="Cart__footer-subtotal-price">
                {`${formatMoney(
                  parseFloat(checkout.subtotalPrice) * 100,
                  "${{amount}}"
                )}  ${checkout.currencyCode}`}
              </p>
            </div>
            <p className="Cart__footer-tax-shipping-note">
              {`${strings.cart.tax_shipping_note}`}
            </p>
            <a
              href={checkout.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="Cart__footer-checkout"
            >
              <button className="Cart__footer-checkout-button">Checkout</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
