import "../style/sub-components/NavMenuLi.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useSpring, animated as a } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";
import { ShopContext } from "../context/shopContext";
import { useContext, useState, useEffect } from "react";

function NavMenuLi({ menuItem, index }) {
  const { addRemoveFixedPositionOnBody } = useContext(ShopContext);

  const dispatch = useDispatch();
  let { menuDisplay, menuOpacity } = useSelector((state) => state);

  const [visible, setVisible] = useState(false);
  const style = {
    NavMenuLi: useSpring({
      transform: visible
        ? "translate3d(0px, 0px, 0px)"
        : "translate3d(0px, 40px, 0px)",
      opacity: visible ? 1 : 0,
    }),
  };

  useEffect(() => {
    if (menuDisplay) {
      setTimeout(() => {
        setVisible(true);
      }, 200 * index);
    } else {
      setVisible(false);
    }
  }, [menuDisplay]);

  const { toggleMenuDisplay, toggleMenuOpacity } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [elementHoverLetterSpacing, setElementHoverLetterSpacing] = useSpring(
    () => ({
      letterSpacing: "2px",
    })
  );

  function toggleMenuDisplayOpacity() {
    if (!menuDisplay) {
      toggleMenuDisplay();
      addRemoveFixedPositionOnBody("add");
      setTimeout(() => {
        toggleMenuOpacity();
      }, 10);
    } else if (menuDisplay) {
      toggleMenuOpacity();
      setTimeout(() => {
        toggleMenuDisplay();
        addRemoveFixedPositionOnBody("remove");
      }, 500);
    }
  }
  return (
    <a.li
      style={style.NavMenuLi}
      className={`NavMenu__li ${visible ? "NavMenu__li--visible" : ""}`}
    >
      <Link
        target={menuItem.internal ? "" : "_blank"}
        rel={menuItem.internal ? "" : "noopener noreferrer"}
        to={menuItem.link}
        className="NavMenu__button"
      >
        <p onClick={toggleMenuDisplayOpacity} className="NavMenu__title">
          {menuItem.words.map((word) => (
            <a.span
              style={elementHoverLetterSpacing}
              onMouseEnter={() =>
                setElementHoverLetterSpacing({
                  letterSpacing: "5px",
                })
              }
              onMouseLeave={() =>
                setElementHoverLetterSpacing({
                  letterSpacing: "2px",
                })
              }
              onClick={() =>
                setElementHoverLetterSpacing({
                  letterSpacing: "2px",
                })
              }
              key={uuidv4()}
              className={`NavMenu__title-span `}
            >
              {`${word} `}
            </a.span>
          ))}
        </p>
      </Link>
    </a.li>
  );
}

export default NavMenuLi;
