import React, { useEffect, useState, useRef, useMemo } from "react";
import { useSelector, shallowEqual } from "react-redux";

const LoadingSpinnerContext = React.createContext();

function LoadingSpinnerProvider({ children }) {
  let windowSize = useSelector((state) => state.windowSize, shallowEqual);

  let loadingDisplay = useSelector(
    (state) => state.loadingDisplay,
    shallowEqual
  );

  const requestRef = useRef();
  const [position, setPosition] = useState({ xOffset: 0, yOffset: 0 });

  const [windowWidth, setWindowWidth] = useState(
    windowSize[0] < 769 ? windowSize[0] - 200 : windowSize[0] - 500
  );
  const [ready, setReady] = useState(false);
  const windowHeight = useRef(windowSize[1]);

  const xSpeed = useRef(Math.random() * 5);
  const xOffset = useRef(Math.random() * (windowWidth - 40));

  const ySpeed = useRef(Math.random() * 5);
  const yOffset = useRef(Math.random() * (windowHeight.current - 40));

  useEffect(() => {
    if (windowSize[0] < 769 && windowSize[0] - 200 !== windowWidth) {
      setWindowWidth(windowSize[0] - 200);
    } else if (windowSize[0] > 768 && windowSize[0] - 500 !== windowWidth) {
      setWindowWidth(windowSize[0] - 500);
    }
    const windowHeight = windowSize[1];

    const move = function () {
      if (xOffset.current > windowWidth || xOffset.current < 0) {
        xSpeed.current = xSpeed.current * -1;
      }

      if (yOffset.current > windowHeight || yOffset.current < 0) {
        ySpeed.current = ySpeed.current * -1;
      }

      xOffset.current = xOffset.current + xSpeed.current;
      yOffset.current = yOffset.current + ySpeed.current;
      setPosition({ xOffset: xOffset.current, yOffset: yOffset.current });

      if (!ready) {
        setReady(true);
      }
    };

    function onTick() {
      setTimeout(() => move(), 0);
      requestRef.current = requestAnimationFrame(onTick);
    }
    if (loadingDisplay) {
      requestRef.current = requestAnimationFrame(onTick);
      return () => cancelAnimationFrame(requestRef.current);
    }
  }, [windowSize, windowWidth, loadingDisplay]);

  return (
    <LoadingSpinnerContext.Provider
      value={{
        ready: ready,
        position: position,
      }}
    >
      {children}
    </LoadingSpinnerContext.Provider>
  );
}

export { LoadingSpinnerContext };

export default LoadingSpinnerProvider;
