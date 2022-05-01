import "../style/sub-components/NavMenuIcon.css";
import React, { useEffect, useMemo } from "react";
import useHandleNavMenuIconClick from "../hooks/useHandleNavMenuIconClick";
import useSetCursorHover from "../hooks/useSetCursorHover";

import { useSelector, shallowEqual } from "react-redux";

const NavMenuIcon = () => {
  const { handleNavMenuIconClick } = useHandleNavMenuIconClick();
  const { setCursorHover } = useSetCursorHover();

  let menuDisplay = useSelector((state) => state.menuDisplay, shallowEqual);
  let menuOpacity = useSelector((state) => state.menuOpacity, shallowEqual);
  let cartDisplay = useSelector((state) => state.cartDisplay, shallowEqual);
  let windowSize = useSelector((state) => state.windowSize, shallowEqual);
  let scrollBarWidth = useSelector(
    (state) => state.scrollBarWidth,
    shallowEqual
  );

  return useMemo(() => {
    return (
      <div
        onMouseEnter={() => setCursorHover(true)}
        onMouseLeave={() => setCursorHover(false)}
        onClick={() => handleNavMenuIconClick()}
        className="NavMenuIcon"
      >
        <div
          className={`NavMenuIcon__wrapper${
            menuOpacity ? " NavMenuIcon__wrapper--open" : ""
          } ${
            menuDisplay !== menuOpacity
              ? "NavMenuIcon__wrapper--unclickable"
              : ""
          }`}
        >
          <div className="NavMenuIcon__word">Menu</div>
        </div>
      </div>
    );
  }, [menuDisplay, menuOpacity, cartDisplay, scrollBarWidth, windowSize]);
};

export default NavMenuIcon;
