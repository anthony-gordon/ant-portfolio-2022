import "../style/components/NavBar.css";
import NavHamburgerIcon from "../sub-components/NavHamburgerIcon";
import CartIcon from "../sub-components/CartIcon";
import NavLogo from "../sub-components/NavLogo";
import { useSelector } from "react-redux";
import LoadingSpinner from "../sub-components/LoadingSpinner";
import LoadingSpinnerTest from "../sub-components/LoadingSpinnerTest";

function NavBar() {
  let { loadingVisible, loadingDisplay } = useSelector((state) => state);

  return (
    <div
      className={`NavBar ${loadingDisplay ? "NavBar--loading" : ""} ${
        !loadingVisible ? "NavBar--loading-completed" : ""
      }`}
    >
      <div className="NavBar__wrapper">
        <NavHamburgerIcon />
        <NavLogo />
        <CartIcon />
      </div>

      <LoadingSpinner number={1} />
      <LoadingSpinner number={2} />
      <LoadingSpinner number={3} />
      {/* <LoadingSpinnerTest number={1} /> */}
    </div>
  );
}

export default NavBar;
