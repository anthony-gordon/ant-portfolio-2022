import React, {
  useLayoutEffect,
  useCallback,
  useRef,
  useState,
  useEffect,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import "./../style/components/ScrollContainer.css";
import { animated as a, useSpring } from "react-spring";
import { useSelector } from "react-redux";

function ScrollContainer({ children, y }) {
  const { windowSize } = useSelector((state) => state);

  const viewportRef = useRef(null);
  const [currentHeight, setCurrentHeight] = useState(window.innerHeight);

  const getCurrentHeight = useCallback((entries) => {
    for (let entry of entries) {
      const crx = entry.contentRect;
      setCurrentHeight(crx.height);
    }
  }, []);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    let ro = new ResizeObserver((entries) => getCurrentHeight(entries));
    ro.observe(viewport);
    return () => {
      if (!ro) return;
      ro.disconnect();
    };
  }, [getCurrentHeight]);

  return (
    <>
      <a.div ref={viewportRef} className="ScrollContainer">
        {children}
      </a.div>
      <div style={{ height: currentHeight }} />
    </>
  );
}

export default ScrollContainer;
