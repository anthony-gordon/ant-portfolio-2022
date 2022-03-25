import "../style/sub-components/NavHamburgerIcon.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useContext } from "react";
import { actionCreators } from "./../state/index";
import { ShopContext } from "../context/shopContext";

function NavHamburgerIcon() {
  const dispatch = useDispatch();
  const { addRemoveFixedPositionOnBody } = useContext(ShopContext);

  let { menuDisplay, menuOpacity, cartDisplay, windowSize } = useSelector(
    (state) => state
  );
  const {
    toggleMenuDisplay,
    toggleMenuOpacity,
    updateCursorHover,
    toggleCartDisplay,
    toggleCartOpacity,
  } = bindActionCreators(actionCreators, dispatch);

  function toggleMenuDisplayOpacity() {
    if (!menuDisplay) {
      console.log(cartDisplay);

      updateCursorHover(false);
      if (cartDisplay) {
        console.log("cart display");
        toggleCartOpacity();
        setTimeout(() => {
          updateCursorHover(true);

          setTimeout(() => {
            toggleCartDisplay();
            toggleMenuDisplay();
            addRemoveFixedPositionOnBody("add", windowSize[0]);

            setTimeout(() => {
              toggleMenuOpacity();
            }, 10);
          }, 250);
        }, 250);
      } else {
        toggleMenuDisplay();
        addRemoveFixedPositionOnBody("add", windowSize[0]);

        setTimeout(() => {
          toggleMenuOpacity();
          setTimeout(() => {
            updateCursorHover(true);
          }, 250);
        }, 10);
      }
    } else if (menuDisplay) {
      updateCursorHover(false);
      toggleMenuOpacity();
      setTimeout(() => {
        updateCursorHover(true);
        setTimeout(() => {
          toggleMenuDisplay();
          addRemoveFixedPositionOnBody("remove", windowSize[0]);
        }, 250);
      }, 250);
    }
  }
  return (
    <div
      onMouseEnter={() => updateCursorHover(true)}
      onMouseLeave={() => updateCursorHover(false)}
      className="NavHamburgerIcon"
    >
      <div
        onClick={toggleMenuDisplayOpacity}
        className={`NavHamburgerIcon__wrapper${
          menuOpacity ? " NavHamburgerIcon__wrapper--open" : ""
        } ${
          menuDisplay !== menuOpacity
            ? "NavHamburgerIcon__wrapper--unclickable"
            : ""
        }`}
      >
        {/* <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span> */}
        <div className="NavHamburgerIcon__word">Menu</div>
      </div>
    </div>
  );
}

export default NavHamburgerIcon;
