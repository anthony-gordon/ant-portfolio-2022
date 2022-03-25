import "../style/sub-components/CartIcon.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ShopContext } from "../context/shopContext";
import { useContext } from "react";

function CartIcon() {
  const dispatch = useDispatch();
  const { checkoutTotalLineItems, addRemoveFixedPositionOnBody } =
    useContext(ShopContext);
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

  function toggleCartDisplayOpacity() {
    updateCursorHover(false);
    if (!cartDisplay) {
      if (menuDisplay) {
        toggleMenuOpacity();
        setTimeout(() => {
          updateCursorHover(true);

          setTimeout(() => {
            toggleMenuDisplay();
            toggleCartDisplay();
            addRemoveFixedPositionOnBody("add", windowSize[0]);
            setTimeout(() => {
              toggleCartOpacity();
            }, 10);
          }, 250);
        }, 250);
      } else {
        toggleCartDisplay();
        addRemoveFixedPositionOnBody("add", windowSize[0]);
        setTimeout(() => {
          toggleCartOpacity();
        }, 10);
        setTimeout(() => {
          updateCursorHover(true);
        }, 250);
      }
    } else if (cartDisplay) {
      toggleCartOpacity();
      setTimeout(() => {
        updateCursorHover(true);

        setTimeout(() => {
          toggleCartDisplay();
          addRemoveFixedPositionOnBody("remove", windowSize[0]);
        }, 250);
      }, 250);
    }
  }
  return (
    <div className="CartIcon">
      <div
        onClick={toggleCartDisplayOpacity}
        onMouseEnter={() => updateCursorHover(true)}
        onMouseLeave={() => updateCursorHover(false)}
        className={`CartIcon__wrapper${
          cartOpacity ? " CartIcon__wrapper--open" : ""
        } ${
          cartDisplay !== cartOpacity ? "CartIcon__wrapper--unclickable" : ""
        }`}
      >
        {/* <ShoppingCartOutlinedIcon /> */}
        <div className="CartIcon__word">Bag ({checkoutTotalLineItems})</div>
      </div>
    </div>
  );
}

export default CartIcon;
