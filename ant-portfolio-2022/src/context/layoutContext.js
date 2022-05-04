import { useEffect } from "react";
import { animated as a, useSpring } from "react-spring";
import React, { useLayoutEffect } from "react";
import { helpers } from "../helpers/helpersIndex";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import useSetFixedPositionBody from "../hooks/useSetFixedPositionBody";

const LayoutContext = React.createContext();

function LayoutProvider({ children }) {
  const { gridScroll, navLogoClick, cartIconClick, cartClose, strings } =
    helpers;

  const dispatch = useDispatch();
  const { setFixedPositionBody } = useSetFixedPositionBody();
  const { updateWindowSize, updateYOffset, updateHoverDevice } =
    bindActionCreators(actionCreators, dispatch);

  const windowSize = useSelector((state) => state.windowSize);
  const bodyNoScroll = useSelector((state) => state.bodyNoScroll);

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
      if (bodyNoScroll) {
        setFixedPositionBody("add", window.innerHeight);
      } else {
        setFixedPositionBody("remove", window.innerHeight);
      }
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

  useEffect(() => {
    const handleScroll = () => set({ y: [-window.pageYOffset] });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [set]);

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
        gridScroll: gridScroll,
        navLogoClick: navLogoClick,
        cartIconClick: cartIconClick,
        cartClose: cartClose,
        strings: strings,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export { LayoutContext };

export default LayoutProvider;
