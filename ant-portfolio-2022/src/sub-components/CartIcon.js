import "../style/sub-components/CartIcon.css";

import { useSelector, shallowEqual } from "react-redux";
import { useEffect, useMemo } from "react";
import useHandleCartIconClick from "../hooks/useHandleCartIconClick";
import useSetCursorHover from "../hooks/useSetCursorHover";

function CartIcon() {
  const { handleCartIconClick } = useHandleCartIconClick();
  const { setCursorHover } = useSetCursorHover();

  let cartDisplay = useSelector((state) => state.cartDisplay, shallowEqual);
  let cartOpacity = useSelector((state) => state.cartOpacity, shallowEqual);
  let cartCount = useSelector((state) => state.cartCount, shallowEqual);
  let menuDisplay = useSelector((state) => state.menuDisplay, shallowEqual);
  let windowSize = useSelector((state) => state.windowSize, shallowEqual);
  let scrollBarWidth = useSelector(
    (state) => state.scrollBarWidth,
    shallowEqual
  );

  return useMemo(() => {
    return (
      <div className="CartIcon">
        <div
          onClick={() => handleCartIconClick()}
          onMouseEnter={() => setCursorHover(true)}
          onMouseLeave={() => setCursorHover(false)}
          className={`CartIcon__wrapper${
            cartOpacity ? " CartIcon__wrapper--open" : ""
          } ${
            cartDisplay !== cartOpacity ? "CartIcon__wrapper--unclickable" : ""
          }`}
        >
          <div className="CartIcon__word">Bag ({cartCount})</div>
        </div>
      </div>
    );
  }, [
    cartDisplay,
    cartOpacity,
    cartCount,
    menuDisplay,
    windowSize,
    scrollBarWidth,
  ]);
}

export default CartIcon;
