import "../style/components/NavBar.css";

import NavMenuIcon from "../sub-components/NavMenuIcon";
import CartIcon from "../sub-components/CartIcon";
import NavLogo from "../sub-components/NavLogo";
import LoadingSpinner from "../sub-components/LoadingSpinner";

import { useSelector } from "react-redux";

function NavBar() {
  let { loadingVisible, loadingDisplay } = useSelector((state) => state);

  return (
    <div
      className={`NavBar ${loadingDisplay ? "NavBar--loading" : ""} ${
        !loadingVisible ? "NavBar--loading-completed" : ""
      }`}
    >
      <div className="NavBar__wrapper">
        <NavMenuIcon />
        <NavLogo />
        <CartIcon />
      </div>
      <LoadingSpinner number={1} />
      <LoadingSpinner number={2} />
      <LoadingSpinner number={3} />
    </div>
  );
}

export default NavBar;
