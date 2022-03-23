import "../style/sub-components/CartIcon.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function CartIcon() {
  const dispatch = useDispatch();

  let { cartDisplay, cartOpacity, menuDisplay } = useSelector((state) => state);
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
            setTimeout(() => {
              toggleCartOpacity();
            }, 10);
          }, 250);
        }, 250);
      } else {
        toggleCartDisplay();
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
        <ShoppingCartOutlinedIcon />
      </div>
    </div>
  );
}

export default CartIcon;
