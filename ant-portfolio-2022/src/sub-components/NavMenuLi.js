import "../style/sub-components/NavMenuLi.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";
import { ShopContext } from "../context/shopContext";
import { useContext, useState, useEffect } from "react";
import { LayoutContext } from "../context/layoutContext";

function NavMenuLi({ menuItem, index }) {
  const { addRemoveFixedPositionOnBody } = useContext(ShopContext);
  const { menuIconClick } = useContext(LayoutContext);

  const dispatch = useDispatch();
  let { menuDisplay, cartDisplay, windowSize } = useSelector((state) => state);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (menuDisplay) {
      setTimeout(() => {
        setVisible(true);
      }, 200 * index);
    } else {
      setVisible(false);
    }
  }, [menuDisplay, index]);

  const {
    toggleMenuDisplay,
    toggleMenuOpacity,
    updateCursorHover,
    toggleCartOpacity,
    toggleCartDisplay,
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
    <li className={`NavMenu__li ${visible ? "NavMenu__li--visible" : ""}`}>
      <Link
        target={menuItem.internal ? "" : "_blank"}
        rel={menuItem.internal ? "" : "noopener noreferrer"}
        to={menuItem.link}
        className="NavMenu__li-button"
      >
        <p
          onMouseEnter={() => updateCursorHover(true)}
          onMouseLeave={() => updateCursorHover(false)}
          onClick={handleClick}
          className="NavMenu__li-title"
        >
          <span
            className={`NavMenu__li-title-span `}
          >{`${menuItem.words} `}</span>
        </p>
      </Link>
    </li>
  );
}

export default NavMenuLi;
