import "../style/sub-components/CartIcon.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function CartIcon() {
  const dispatch = useDispatch();

  let { cartDisplay, cartOpacity } = useSelector((state) => state);
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
  return (
    <div className="CartIcon">
      <div
        onClick={toggleCartDisplayOpacity}
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
