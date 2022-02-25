import "../style/components/NavBar.css";
import NavHamburgerIcon from "../sub-components/NavHamburgerIcon";
import CartIcon from "../sub-components/CartIcon";

import NavLogo from "../sub-components/NavLogo";
import { useSelector, useDispatch } from "react-redux";

function NavBar() {
  let { menuOpacity } = useSelector((state) => state);

  return (
    <div className={`NavBar ${menuOpacity ? "NavBar--menu-open" : ""}`}>
      <div className="NavBar__wrapper">
        <NavHamburgerIcon />
        <NavLogo />
        <CartIcon />
      </div>
    </div>
  );
}

export default NavBar;
