import { useEffect } from "react";
import { animated as a, useSpring } from "react-spring";
import React, { useLayoutEffect } from "react";
import { helpers } from "../helpers/helpersIndex";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const LayoutContext = React.createContext();

function LayoutProvider({ children }) {
  const {
    gridScroll,
    menuIconClick,
    navLogoClick,
    cartIconClick,
    navMenuItems,
    cartClose,
    generateLineItemOptions,
    strings,
  } = helpers;

  const dispatch = useDispatch();
  const { updateWindowSize, updateYOffset, updateHoverDevice } =
    bindActionCreators(actionCreators, dispatch);
  const { windowSize, hoverDevice } = useSelector((state) => state);
  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover)").matches;
    updateHoverDevice(canHover);
  }, [windowSize]);

  useEffect(() => {
    document
      .querySelector("html")
      .setAttribute(`style`, `--vh:${window.innerHeight / 100}px;`);
  }, []);

  useLayoutEffect(() => {
    const handleWindowResize = () => {
      updateWindowSize([window.innerWidth, window.innerHeight]);
      document
        .querySelector("html")
        .setAttribute(`style`, `--vh:${window.innerHeight / 100}px;`);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  const [{ y }, set] = useSpring(() => ({
    y: [0],
    config: {
      mass: 1,
      tension: 200,
      friction: 50,
      precision: 0.00001,
      velocity: 0,
      clamp: true,
      bounce: true,
    },
  }));

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
    const handleScroll = () => set({ y: [-window.pageYOffset] });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [set]);

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

  useEffect(() => {
    const handleScroll = () => {
      updateYOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <LayoutContext.Provider
      value={{
        y: y,
        mousePositionX: mousePositionX,
        mousePositionY: mousePositionY,
        gridScroll: gridScroll,
        menuIconClick: menuIconClick,
        navLogoClick: navLogoClick,
        cartIconClick: cartIconClick,
        navMenuItems: navMenuItems,
        cartClose: cartClose,
        generateLineItemOptions: generateLineItemOptions,
        strings: strings,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export { LayoutContext };

export default LayoutProvider;
