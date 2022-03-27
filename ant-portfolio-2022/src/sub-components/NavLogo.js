import "../style/sub-components/NavLogo.css";

import { actionCreators } from "./../state/index";
import { ShopContext } from "../context/shopContext";
import { LayoutContext } from "../context/layoutContext";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useContext } from "react";

function NavLogo() {
  const dispatch = useDispatch();
  const { addRemoveFixedPositionOnBody } = useContext(ShopContext);
  const { navLogoClick } = useContext(LayoutContext);

  let { menuDisplay, cartDisplay, windowSize } = useSelector((state) => state);
  const {
    toggleMenuDisplay,
    toggleMenuOpacity,
    toggleCartOpacity,
    toggleCartDisplay,
    updateCursorHover,
  } = bindActionCreators(actionCreators, dispatch);

  function handleClick() {
    navLogoClick(
      menuDisplay,
      cartDisplay,
      windowSize,
      toggleMenuDisplay,
      toggleMenuOpacity,
      toggleCartOpacity,
      toggleCartDisplay,
      updateCursorHover,
      addRemoveFixedPositionOnBody
    );
  }

  return (
    <h1 className="NavLogo">
      <Link className="NavLogo__link" to={`/`}>
        <div
          onMouseEnter={() => updateCursorHover(true)}
          onMouseLeave={() => updateCursorHover(false)}
          onClick={handleClick}
          className="NavLogo__text"
        >
          Anthony Gordon
        </div>
      </Link>
    </h1>
  );
}

export default NavLogo;
