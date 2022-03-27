import "../style/sub-components/LoadingSpinner.css";

import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

function LoadingSpinner({ number }) {
  let { windowSize, loadingVisible, loadingDisplay } = useSelector(
    (state) => state
  );

  const requestRef = useRef();

  const [windowWidth, setWindowWidth] = useState(
    windowSize[0] < 769 ? windowSize[0] - 200 : windowSize[0] - 500
  );
  const [element, setElement] = useState(null);
  const [ready, setReady] = useState(false);
  const windowHeight = useRef(windowSize[1]);

  const xSpeed = useRef(Math.random() * 5);
  const xOffset = useRef(Math.random() * (windowWidth - 40));

  const ySpeed = useRef(Math.random() * 5);
  const yOffset = useRef(Math.random() * (windowHeight.current - 40));

  useEffect(() => {
    const windowHeight = windowSize[1];

    const move = function () {
      if (element) {
        if (xOffset.current > windowWidth || xOffset.current < 0) {
          xSpeed.current = xSpeed.current * -1;
        }

        if (yOffset.current > windowHeight || yOffset.current < 0) {
          ySpeed.current = ySpeed.current * -1;
        }

        xOffset.current = xOffset.current + xSpeed.current;
        yOffset.current = yOffset.current + ySpeed.current;
        element.style.transform = `translate(${xOffset.current}px, ${yOffset.current}px)`;
        if (!ready) {
          setReady(true);
        }
      }
    };

    function onTick() {
      move();
      requestRef.current = requestAnimationFrame(onTick);
    }
    if (element && loadingDisplay) {
      requestRef.current = requestAnimationFrame(onTick);
      return () => cancelAnimationFrame(requestRef.current);
    }
  }, [element, loadingDisplay, windowWidth, windowSize]);

  useEffect(() => {
    if (element === null) {
      setElement(document.querySelector(`.LoadingSpinner__wrapper-${number}`));
    }
    if (windowSize[0] < 769 && windowSize[0] - 200 !== windowWidth) {
      setWindowWidth(windowSize[0] - 200);
    } else if (windowSize[0] > 768 && windowSize[0] - 500 !== windowWidth) {
      setWindowWidth(windowSize[0] - 500);
    }
  }, [windowSize, element, number, windowWidth]);

  return (
    <div
      className={`LoadingSpinner ${!ready ? "LoadingSpinner--not-ready" : ""}`}
    >
      <div
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
}

export default LoadingSpinner;
