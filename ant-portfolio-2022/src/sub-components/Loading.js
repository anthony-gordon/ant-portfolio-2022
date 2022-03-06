import React, { useEffect, useState } from "react";
import "./../style/sub-components/Loading.css";
import { useSpring, animated as a } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function Loading({
  loadingOuterBackgroundInFrame,
  loadingVisible,
  loadingDisplay,
}) {
  const style = {
    LoadingOuterBackground: useSpring({
      bottom: loadingOuterBackgroundInFrame ? `${0}%` : `${100}%`,
    }),
    Loading: useSpring({
      opacity: loadingVisible ? 1 : 0,
      display: loadingDisplay ? "flex" : "none",
    }),
  };

  // let title = document.querySelector(".title");
  // let curs = document.querySelector(".cursor");

  // document.addEventListener("mousemove", (e) => {
  //   let x = e.pageX;
  //   let y = e.pageY;
  //   curs.style.left = x - 22 + "px";
  //   curs.style.top = y - 22 + "px";
  // });

  // document.addEventListener("mouseleave", (e) => {
  //   let x = e.pageX;
  //   let y = e.pageY;
  //   curs.style.left = x - 22 + "px";
  //   curs.style.top = y - 22 + "px";
  // });

  return (
    <a.div style={style.Loading} className="Loading">
      <a.div
        style={style.LoadingOuterBackground}
        className="Loading__outer_background"
      ></a.div>
      <div className="Loading__outer-wrapper">
        <div className="Loading__background"></div>
      </div>
    </a.div>
  );
}

export default Loading;
