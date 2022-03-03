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
      transform: loadingOuterBackgroundInFrame
        ? `translateY(0%)`
        : `translateY(-100%)`,
    }),
    Loading: useSpring({
      opacity: loadingVisible ? 1 : 0,
      display: loadingDisplay ? "flex" : "none",
    }),
  };

  return (
    <a.div style={style.Loading} className="Loading">
      <a.div
        style={style.LoadingOuterBackground}
        className="Loading__outer_background"
      ></a.div>
      <div className="Loading__outer-wrapper">
        <div className="Loading__background"></div>
        <div className="Loading__image-wrapper">
          <svg viewBox="0 0 512 512">
            <defs>
              <mask id="stripe">
                <rect x="0" y="0" width="512" height="512" fill="white" />
                <path
                  d="M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z"
                  stroke="none"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </mask>
            </defs>
            <rect
              x="0"
              y="0"
              width="512"
              height="512"
              fill="black"
              mask="url(#stripe)"
            />
          </svg>
        </div>
      </div>
    </a.div>
  );
}

export default Loading;
