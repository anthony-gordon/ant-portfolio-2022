import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import SiteRoutes from "./SiteRoutes";
import "./style/components/AnthonyPortfolioSite.css";
import ScrollContainer from "./components/ScrollContainer";

function AnthonyPortfolioSite() {
  const dispatch = useDispatch();
  const { updateWindowSize, updateYOffset } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    document
      .querySelector("html")
      .setAttribute(`style`, `--vh:${window.innerHeight / 100}px;`);
  }, []);

  useLayoutEffect(() => {
    const handleWindowResize = () => {
      updateWindowSize([window.innerWidth, window.innerHeight]);
      document
        .querySelector("html")
        .setAttribute(`style`, `--vh:${window.innerHeight / 100}px;`);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  useEffect(() => {
    const handleScroll = () => {
      updateYOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div onScroll={console.log("hi")} className="AnthonyPortfolioSite">
      {/* <header>
        <NavBar />
        <NavMenu />
        <Cart />
      </header> */}
      {/* <div className="AnthonyPortfolioSite__scrollable">
        <div className="AnthonyPortfolioSite__scrollable-spacer"> */}
      <ScrollContainer>
        <SiteRoutes />
      </ScrollContainer>
      {/* </div>
      </div> */}
      {/* 
      <Footer /> */}
    </div>
  );
}

export default AnthonyPortfolioSite;
