import "./style/components/App.css";
import AnthonyPortfolioSite from "./AnthonyPortfolioSite";
import { HelmetProvider } from "react-helmet-async";
import ShopProvider from "./context/shopContext";
import {
  useEffect,
  useState,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react";
import { animated as a, useSpring } from "react-spring";

function App() {
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
    const handleMouseMove = (e) => {
      setMousePosition({
        mousePositionX: [e.clientX],
        mousePositionY: [e.clientY],
      });
    };
    window.addEventListener("mousemove", (e) => handleMouseMove(e));
    return () =>
      window.removeEventListener("mousemove", (e) => handleMouseMove(e));
  }, [setMousePosition]);

  return (
    <HelmetProvider>
      <ShopProvider
        mousePositionX={mousePositionX}
        mousePositionY={mousePositionY}
        y={y}
      >
        <div className="App">
          <AnthonyPortfolioSite />
        </div>
      </ShopProvider>
    </HelmetProvider>
  );
}

export default App;
