import "../style/sub-components/NavMenuLi.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useSpring, animated as a } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";

function NavMenuLi({ menuItem }) {
  const dispatch = useDispatch();

  let { menuDisplay } = useSelector((state) => state);
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
      setTimeout(() => {
        toggleMenuOpacity();
      }, 10);
    } else if (menuDisplay) {
      toggleMenuOpacity();
      setTimeout(() => {
        toggleMenuDisplay();
      }, 500);
    }
  }
  return (
    <li className="NavMenu__li">
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
    </li>
  );
}

export default NavMenuLi;
