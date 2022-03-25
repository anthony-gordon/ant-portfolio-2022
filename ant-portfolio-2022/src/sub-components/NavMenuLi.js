import "../style/sub-components/NavMenuLi.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";
import { ShopContext } from "../context/shopContext";
import { useContext, useState, useEffect } from "react";

function NavMenuLi({ menuItem, index }) {
  const { addRemoveFixedPositionOnBody } = useContext(ShopContext);

  const dispatch = useDispatch();
  let { menuDisplay } = useSelector((state) => state);

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

  const { toggleMenuDisplay, toggleMenuOpacity, updateCursorHover } =
    bindActionCreators(actionCreators, dispatch);

  function toggleMenuDisplayOpacity() {
    if (menuDisplay) {
      toggleMenuOpacity();
      updateCursorHover(false);
      setTimeout(() => {
        toggleMenuDisplay();
        addRemoveFixedPositionOnBody("remove");
      }, 500);
    }
  }
  return (
    <li className={`NavMenu__li ${visible ? "NavMenu__li--visible" : ""}`}>
      <Link
        target={menuItem.internal ? "" : "_blank"}
        rel={menuItem.internal ? "" : "noopener noreferrer"}
        to={menuItem.link}
        className="NavMenu__button"
      >
        <p
          onMouseEnter={() => updateCursorHover(true)}
          onMouseLeave={() => updateCursorHover(false)}
          onClick={toggleMenuDisplayOpacity}
          className="NavMenu__title"
        >
          <span className={`NavMenu__title-span `}>{`${menuItem.words} `}</span>
        </p>
      </Link>
    </li>
  );
}

export default NavMenuLi;
