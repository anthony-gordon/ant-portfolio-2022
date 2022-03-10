import { useEffect, useState, useRef } from "react";
import debounce from "lodash.debounce";
import { useSelector } from "react-redux";
import "../style/sub-components/LoadingSpinner.css";
import { animated as a, useSpring } from "react-spring";
import { useDebouncedEffect } from "../hooks/useDebouncedEffect";

function LoadingSpinner({ rec_number }) {
  let { windowSize, loadingVisible, loadingDisplay } = useSelector(
    (state) => state
  );

  const requestRef = useRef();

  const [windowWidth, setWindowWidth] = useState(windowSize[0] - 500);

  const element = document.querySelector(
    `.LoadingSpinner__wrapper-${rec_number}`
  );
  const windowHeight = windowSize[1];
  let xSpeed = Math.random() * 20;
  let xOffset = Math.random() * (windowWidth - 40);

  let ySpeed = Math.random() * 20;
  let yOffset = Math.random() * (windowHeight - 40);

  const move = function () {
    if (windowWidth && element) {
      if (xOffset > windowWidth || xOffset < 0) {
        xSpeed = xSpeed * -1;
      }

      if (yOffset > windowHeight || yOffset < 0) {
        ySpeed = ySpeed * -1;
      }

      xOffset += xSpeed;
      yOffset += ySpeed;

      element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    }
  };

  function onTick() {
    move();
    requestRef.current = requestAnimationFrame(onTick);
  }

  useEffect(() => {
    if (windowWidth && loadingVisible) {
      requestRef.current = requestAnimationFrame(onTick);
      return () => cancelAnimationFrame(requestRef.current);
    }
  }, [windowWidth, loadingVisible]);

  useEffect(() => {
    if (windowSize && windowSize.length > 0) {
      const lines = document.querySelectorAll(
        `.LoadingSpinner__wrapper-${rec_number} .LoadingSpinner__line`
      );

      setWindowWidth(
        windowSize && windowSize[0] < 769
          ? windowSize[0] - 200
          : windowSize[0] - 500
      );
      lines.forEach((line) => {
        line.style.height = `${windowSize && windowSize[0] < 769 ? 20 : 50}px`;
        line.style.width = `${windowSize && windowSize[0] < 769 ? 200 : 500}px`;
      });
    }
  }, [windowSize]);

  const style = {
    LoadingSpinner: useSpring({
      opacity: loadingVisible ? 1 : 0,
      display: loadingDisplay ? "flex" : "none",
    }),
  };

  return (
    <a.div style={style.LoadingSpinner} className={`LoadingSpinner`}>
      <div
        className={`LoadingSpinner__wrapper LoadingSpinner__wrapper-${rec_number}`}
      >
        <div className="LoadingSpinner__line LoadingSpinner__line--first"></div>
        <div className="LoadingSpinner__line LoadingSpinner__line--second"></div>
        <div className="LoadingSpinner__line LoadingSpinner__line--third"></div>
      </div>
    </a.div>
  );
}

export default LoadingSpinner;
