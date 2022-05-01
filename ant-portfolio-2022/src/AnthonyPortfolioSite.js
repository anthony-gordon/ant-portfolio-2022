import "./style/components/AnthonyPortfolioSite.css";

import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";
import Cart from "./components/Cart";
import ScrollContainer from "./components/ScrollContainer";
import CursorWrapper from "./components/CursorWrapper";
import SiteRoutes from "./SiteRoutes";

import React, { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

function AnthonyPortfolioSite() {
  const hoverDevice = useSelector((state) => state.hoverDevice, shallowEqual);

  useEffect(() => {
    console.log("re-render AnthonyPortfolioSite");
  });

  return (
    <div className="AnthonyPortfolioSite">
      {hoverDevice && <CursorWrapper />}
      <NavBar />
      <NavMenu />
      <Cart />
      <ScrollContainer>
        <SiteRoutes />
      </ScrollContainer>
    </div>
  );
}

export default AnthonyPortfolioSite;
