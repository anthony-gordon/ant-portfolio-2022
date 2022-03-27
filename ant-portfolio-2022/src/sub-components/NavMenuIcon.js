import "../style/sub-components/NavMenuIcon.css";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useContext } from "react";
import { actionCreators } from "../state/index";
import { ShopContext } from "../context/shopContext";
import { LayoutContext } from "../context/layoutContext";

function NavMenuIcon() {
  const dispatch = useDispatch();
  const { addRemoveFixedPositionOnBody } = useContext(ShopContext);
  const { menuIconClick } = useContext(LayoutContext);

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

  function handleClick() {
    menuIconClick(
      menuDisplay,
      cartDisplay,
      windowSize,
      toggleMenuDisplay,
      toggleMenuOpacity,
      updateCursorHover,
      toggleCartDisplay,
      toggleCartOpacity,
      addRemoveFixedPositionOnBody
    );
  }

  return (
    <div
      onMouseEnter={() => updateCursorHover(true)}
      onMouseLeave={() => updateCursorHover(false)}
      className="NavMenuIcon"
    >
      <div
        onClick={handleClick}
        className={`NavMenuIcon__wrapper${
          menuOpacity ? " NavMenuIcon__wrapper--open" : ""
        } ${
          menuDisplay !== menuOpacity ? "NavMenuIcon__wrapper--unclickable" : ""
        }`}
      >
        <div className="NavMenuIcon__word">Menu</div>
      </div>
    </div>
  );
}

export default NavMenuIcon;
