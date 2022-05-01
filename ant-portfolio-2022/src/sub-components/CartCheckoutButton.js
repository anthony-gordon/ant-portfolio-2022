import "./../style/sub-components/CartCheckoutButton.css";
import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";

import { strings } from "../context/strings";
import useSetCursorHover from "../hooks/useSetCursorHover";

export default function CartCheckoutButton() {
  const { checkout } = useContext(ShopContext);

  useEffect(() => {
    console.log("checkout button re-render", strings);
  });

  const { setCursorHover } = useSetCursorHover();
  return (
    <a
      href={checkout && checkout.webUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="Cart__footer-checkout"
    >
      <button
        onMouseEnter={() => setCursorHover(true)}
        onMouseLeave={() => setCursorHover(false)}
        onClick={() => setCursorHover(false)}
        className="CartCheckoutButton"
      >
        <span>{`${strings.cart.checkout}`}</span>
      </button>
    </a>
  );
}
