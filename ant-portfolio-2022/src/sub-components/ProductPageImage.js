import "../style/sub-components/ProductPageImage.css";

import React, { useState, useEffect, useRef } from "react";

import { useSpring, animated as a } from "react-spring";
import { useSelector } from "react-redux";

import useSetCursorHover from "./../hooks/useSetCursorHover";

function ProductPageImage({ src, size, aspect, product }) {
  const figure = useRef(null);
  const hoverDevice = useSelector((state) => state.hoverDevice);
  const { setCursorHover } = useSetCursorHover();

  const [{ mousePositionX, mousePositionY }, setMousePosition] = useSpring(
    () => ({
      mousePositionX: [0],
      mousePositionY: [0],

      config: {
        mass: 1,
        tension: 200,
        friction: 30,
        precision: 0.00001,
        velocity: 0,
        clamp: true,
      },
    })
  );
  useEffect(() => {
    if (hoverDevice) {
      const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setMousePosition({
          mousePositionX: [x],
          mousePositionY: [y],
        });
      };
      figure.current.addEventListener("mousemove", (e) => handleMouseMove(e));
      return () =>
        figure.current.removeEventListener("mousemove", (e) =>
          handleMouseMove(e)
        );
    }
  });

  return (
    <a.figure
      style={{
        backgroundPositionX: mousePositionX.to(
          (mousePositionX) => `${mousePositionX}%, 0%`
        ),
        backgroundPositionY: mousePositionY.to(
          (mousePositionY) => `${mousePositionY}%, 0%`
        ),
        backgroundImage: `url(${src})`,
      }}
      ref={figure}
      className="ProductPageImage"
      onMouseEnter={() => setCursorHover(true)}
      onMouseLeave={() => setCursorHover(false)}
    >
      <img src={src} className="ProductPageImage__image" />
    </a.figure>
  );
}

export default ProductPageImage;
