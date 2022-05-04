import "./../style/components/Cart.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartTable from "./../sub-components/CartTable";
import { strings } from "./../context/strings";
import CartFooter from "../sub-components/CartFooter";

function Cart() {
  let navBarHeight = useSelector((state) => state.navBarHeight);
  let cartOpacity = useSelector((state) => state.cartOpacity);
  let cartDisplay = useSelector((state) => state.cartDisplay);

  useEffect(() => {
    console.log("cart re-render", strings);
  });

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
          paddingTop: `${navBarHeight}px`,
        }}
        className={`Cart ${cartOpacity ? "Cart--visible" : ""} ${
          cartDisplay ? "Cart--active" : ""
        }`}
      >
        <div className="Cart__content-wrapper">
          <CartTable />
          <CartFooter />
        </div>
      </div>
    </>
  );
}

export default Cart;
