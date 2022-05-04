import "../style/sub-components/LoadingSpinner.css";

import { useEffect, useMemo, useContext } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { LoadingSpinnerContext } from "../context/loadingSpinnerContext";

function LoadingSpinner({ number }) {
  const { ready, position } = useContext(LoadingSpinnerContext);

  let windowSize = useSelector((state) => state.windowSize, shallowEqual);

  let loadingVisible = useSelector(
    (state) => state.loadingVisible,
    shallowEqual
  );
  let loadingDisplay = useSelector(
    (state) => state.loadingDisplay,
    shallowEqual
  );

  // useEffect(() => {
  //   console.log("Loading spinner re-render");
  // });
  return useMemo(() => {
    return (
      <div
        className={`LoadingSpinner ${
          !ready ? "LoadingSpinner--not-ready" : ""
        }`}
      >
        <div
          style={{
            transform: `translate(${position.xOffset}px, ${position.yOffset}px)`,
          }}
          className={`LoadingSpinner__wrapper LoadingSpinner__wrapper-${number}
        ${!loadingVisible ? "LoadingSpinner__wrapper-not-visible" : ""}
        ${!loadingDisplay ? "LoadingSpinner__wrapper--not-displaying" : ""}
        `}
        >
          <div
            className={`LoadingSpinner__line LoadingSpinner__line--first `}
          ></div>
          <div
            className={`LoadingSpinner__line LoadingSpinner__line--second `}
          ></div>
          <div
            className={`LoadingSpinner__line LoadingSpinner__line--third `}
          ></div>
        </div>
      </div>
    );
  }, [windowSize, loadingVisible, loadingDisplay, ready, position]);
}

export default LoadingSpinner;
