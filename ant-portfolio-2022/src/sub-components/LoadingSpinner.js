import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import "../style/sub-components/LoadingSpinner.css";

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

  useEffect(() => {
    const windowHeight = windowSize[1];
    let xSpeed = Math.random() * 5;
    let xOffset = Math.random() * (windowWidth - 40);

    let ySpeed = Math.random() * 5;
    let yOffset = Math.random() * (windowHeight - 40);

    const move = function () {
      if (element) {
        if (xOffset > windowWidth || xOffset < 0) {
          xSpeed = xSpeed * -1;
        }

        if (yOffset > windowHeight || yOffset < 0) {
          ySpeed = ySpeed * -1;
        }

        xOffset += xSpeed;
        yOffset += ySpeed;

        element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
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