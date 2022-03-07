import "../style/components/NavBar.css";
import NavHamburgerIcon from "../sub-components/NavHamburgerIcon";
import CartIcon from "../sub-components/CartIcon";
import NavLogo from "../sub-components/NavLogo";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useSpring, animated as a } from "react-spring";
import LoadingWrapper from "./../sub-components/LoadingWrapper";

function NavBar() {
  const dispatch = useDispatch();

  const {
    updateLoadingOuterBackgroundInFrame,
    updateLoadingVisible,
    updateLoadingDisplay,
  } = bindActionCreators(actionCreators, dispatch);
  let { loading, loadingVisible, loadingDisplay, menuOpacity } = useSelector(
    (state) => state
  );

  const style = {
    NavBar: useSpring({
      height: loading ? `100vh` : `100px`,
    }),
  };
  return (
    <a.div
      style={style.NavBar}
      className={`NavBar ${menuOpacity ? "NavBar--menu-open" : ""}`}
    >
      <div className="NavBar__wrapper">
        <NavHamburgerIcon />
        <NavLogo />
        <CartIcon />
      </div>

      <LoadingSpinner rec_number={1} />
      <LoadingSpinner rec_number={2} />
      <LoadingSpinner rec_number={3} />
      {/* <LoadingWrapper /> */}
    </a.div>
  );
}

export default NavBar;
