import "../style/components/NavBar.css";

import NavMenuIcon from "../sub-components/NavMenuIcon";
import CartIcon from "../sub-components/CartIcon";
import NavLogo from "../sub-components/NavLogo";
import LoadingSpinner from "../sub-components/LoadingSpinner";
import LoadingSpinnerProvider from "../context/loadingSpinnerContext";

import { useSelector, shallowEqual } from "react-redux";
import { useMemo, useEffect } from "react";

function NavBar() {
  const spinners = 3;
  let loadingVisible = useSelector(
    (state) => state.loadingVisible,
    shallowEqual
  );
  let loadingDisplay = useSelector(
    (state) => state.loadingDisplay,
    shallowEqual
  );

  // useEffect(() => {
  //   console.log("Nav Bar re-render");
  // });
  return useMemo(() => {
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
        {[...Array(spinners)].map((spinner, index) => {
          return (
            <LoadingSpinnerProvider key={index} number={index}>
              <LoadingSpinner number={index} />
            </LoadingSpinnerProvider>
          );
        })}
      </div>
    );
  }, [loadingDisplay, loadingVisible]);
}

export default NavBar;
