import "../style/sub-components/NavHamburgerIcon.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useContext } from "react";
import { actionCreators } from "./../state/index";
import { ShopContext } from "../context/shopContext";

function NavHamburgerIcon() {
  const dispatch = useDispatch();
  const { addRemoveFixedPositionOnBody } = useContext(ShopContext);

  let { menuDisplay, menuOpacity } = useSelector((state) => state);
  const { toggleMenuDisplay, toggleMenuOpacity, updateCursorHover } =
    bindActionCreators(actionCreators, dispatch);

  function toggleMenuDisplayOpacity() {
    updateCursorHover(false);
    if (!menuDisplay) {
      toggleMenuDisplay();
      addRemoveFixedPositionOnBody("add");

      setTimeout(() => {
        toggleMenuOpacity();
        setTimeout(() => {
          updateCursorHover(true);
        }, 500);
      }, 10);
    } else if (menuDisplay) {
      toggleMenuOpacity();
      setTimeout(() => {
        addRemoveFixedPositionOnBody("remove");
      }, 500);
      setTimeout(() => {
        toggleMenuDisplay();
      }, 500);
    }
  }
  return (
    <div className="NavHamburgerIcon">
      <div
        onClick={toggleMenuDisplayOpacity}
        onMouseEnter={() => updateCursorHover(true)}
        onMouseLeave={() => updateCursorHover(false)}
        className={`NavHamburgerIcon__wrapper${
          menuOpacity ? " NavHamburgerIcon__wrapper--open" : ""
        } ${
          menuDisplay !== menuOpacity
            ? "NavHamburgerIcon__wrapper--unclickable"
            : ""
        }`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default NavHamburgerIcon;
