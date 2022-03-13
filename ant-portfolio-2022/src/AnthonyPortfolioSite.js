import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import SiteRoutes from "./SiteRoutes";
import "./style/components/AnthonyPortfolioSite.css";

function AnthonyPortfolioSite() {
  const dispatch = useDispatch();
  const { updateWindowSize } = bindActionCreators(actionCreators, dispatch);

  useLayoutEffect(() => {
    function updateSize() {
      updateWindowSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  });

  return (
    <div className="AnthonyPortfolioSite">
      <NavBar />
      <NavMenu />
      <Cart />
      <SiteRoutes />
      <Footer />
    </div>
  );
}

export default AnthonyPortfolioSite;
