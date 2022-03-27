import "../style/sub-components/CartIcon.css";

import { actionCreators } from "./../state/index";
import { ShopContext } from "../context/shopContext";
import { LayoutContext } from "../context/layoutContext";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { useContext } from "react";

function CartIcon() {
  const dispatch = useDispatch();
  const { checkoutTotalLineItems, addRemoveFixedPositionOnBody } =
    useContext(ShopContext);
  const { cartIconClick } = useContext(LayoutContext);

  let { cartDisplay, cartOpacity, menuDisplay, windowSize } = useSelector(
    (state) => state
  );
  const {
    toggleMenuDisplay,
    toggleMenuOpacity,
    toggleCartDisplay,
    toggleCartOpacity,
    updateCursorHover,
  } = bindActionCreators(actionCreators, dispatch);

  function handleClick() {
    cartIconClick(
      cartDisplay,
      cartOpacity,
      menuDisplay,
      windowSize,
      toggleMenuDisplay,
      toggleMenuOpacity,
      toggleCartDisplay,
      toggleCartOpacity,
      updateCursorHover,
      addRemoveFixedPositionOnBody
    );
  }

  return (
    <div className="CartIcon">
      <div
        onClick={handleClick}
        onMouseEnter={() => updateCursorHover(true)}
        onMouseLeave={() => updateCursorHover(false)}
        className={`CartIcon__wrapper${
          cartOpacity ? " CartIcon__wrapper--open" : ""
        } ${
          cartDisplay !== cartOpacity ? "CartIcon__wrapper--unclickable" : ""
        }`}
      >
        <div className="CartIcon__word">Bag ({checkoutTotalLineItems})</div>
      </div>
    </div>
  );
}

export default CartIcon;
