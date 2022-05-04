import { useSpring } from "react-spring";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const CursorWrapperContext = React.createContext();

function CursorWrapperProvider({ children }) {
  const hoverDevice = useSelector((state) => state.hoverDevice);

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
        setMousePosition({
          mousePositionX: [e.clientX],
          mousePositionY: [e.clientY],
        });
      };
      window.addEventListener("mousemove", (e) => handleMouseMove(e));
      return () =>
        window.removeEventListener("mousemove", (e) => handleMouseMove(e));
    }
  }, [setMousePosition]);

  return (
    <CursorWrapperContext.Provider
      value={{ mousePositionX: mousePositionX, mousePositionY: mousePositionY }}
    >
      {children}
    </CursorWrapperContext.Provider>
  );
}

export { CursorWrapperContext };

export default CursorWrapperProvider;
