import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import SiteRoutes from "./SiteRoutes";
import "./style/components/AnthonyPortfolioSite.css";

function AnthonyPortfolioSite() {
  const dispatch = useDispatch();
  const { updateWindowSize } = bindActionCreators(actionCreators, dispatch);

  useLayoutEffect(() => {
    const handleWindowResize = () => {
      updateWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
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
