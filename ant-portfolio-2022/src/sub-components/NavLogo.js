import "../style/sub-components/NavLogo.css";

import useHandleNavLogoClick from "../hooks/useHandleNavLogoClick";
import useSetCursorHover from "../hooks/useSetCursorHover";
import { useSelector, shallowEqual } from "react-redux";

import { Link } from "react-router-dom";
import { useEffect, useMemo } from "react";

function NavLogo() {
  const { handleNavLogoClick } = useHandleNavLogoClick();
  const { setCursorHover } = useSetCursorHover();

  return (
    <h1 className="NavLogo">
      <Link className="NavLogo__link" to={`/`}>
        <div
          onMouseEnter={() => setCursorHover(true)}
          onMouseLeave={() => setCursorHover(false)}
          onClick={() => handleNavLogoClick()}
          className="NavLogo__text"
        >
          Anthony Gordon
        </div>
      </Link>
    </h1>
  );
}

export default NavLogo;
