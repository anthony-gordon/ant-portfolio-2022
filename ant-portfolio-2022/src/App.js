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
      friction: 70,
      precision: 0.00001,
      velocity: 0,
      clamp: true,
    },
  }));

  useEffect(() => {
    const handleScroll = () => set({ y: [-window.pageYOffset] });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [set]);

  return (
    <HelmetProvider>
      <ShopProvider y={y}>
        <div className="App">
          <AnthonyPortfolioSite />
        </div>
      </ShopProvider>
    </HelmetProvider>
  );
}

export default App;
