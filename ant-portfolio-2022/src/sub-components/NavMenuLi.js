import "../style/sub-components/NavMenuLi.css";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

import { useState, useEffect, useMemo } from "react";
import useHandleNavMenuIconClick from "../hooks/useHandleNavMenuIconClick";
import useSetCursorHover from "../hooks/useSetCursorHover";

function NavMenuLi({ menuItem, index }) {
  const { handleNavMenuIconClick } = useHandleNavMenuIconClick();
  const { setCursorHover } = useSetCursorHover();

  let menuDisplay = useSelector((state) => state.menuDisplay, shallowEqual);
  let windowSize = useSelector((state) => state.windowSize, shallowEqual);
  let scrollBarWidth = useSelector(
    (state) => state.scrollBarWidth,
    shallowEqual
  );

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

  return useMemo(() => {
    return (
      <li className={`NavMenu__li ${visible ? "NavMenu__li--visible" : ""}`}>
        <Link
          target={menuItem.internal ? "" : "_blank"}
          rel={menuItem.internal ? "" : "noopener noreferrer"}
          to={menuItem.link}
          className="NavMenu__li-button"
        >
          <p
            onMouseEnter={() => setCursorHover(true)}
            onMouseLeave={() => setCursorHover(false)}
            onClick={() => handleNavMenuIconClick()}
            className="NavMenu__li-title"
          >
            <span
              className={`NavMenu__li-title-span `}
            >{`${menuItem.words} `}</span>
          </p>
        </Link>
      </li>
    );
  }, [menuDisplay, visible, windowSize, scrollBarWidth]);
}

export default NavMenuLi;
