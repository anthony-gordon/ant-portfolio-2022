import "../style/components/NavBar.css";
import NavHamburgerIcon from "../sub-components/NavHamburgerIcon";
import NavLogo from "../sub-components/NavLogo";
import { useSelector, useDispatch } from "react-redux";

function NavBar() {
  let { menuOpacity } = useSelector((state) => state);

  return (
    <div className={`NavBar ${menuOpacity ? "NavBar--menu-open" : ""}`}>
      <NavLogo />
      <NavHamburgerIcon />
    </div>
  );
}

export default NavBar;
