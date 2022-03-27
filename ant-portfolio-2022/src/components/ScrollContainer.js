import React, { useEffect, createRef } from "react";
import "./../style/components/ScrollContainer.css";

function ScrollContainer({ children }) {
  const viewportRef = createRef();

  function getRefDimensions(ref) {
    if (ref.current) {
      const { current } = ref;
      const boundingRect = current.getBoundingClientRect();
      const { width, height } = boundingRect;
      return { width: Math.round(width), height: Math.round(height) };
    }
  }

  useEffect(() => {
    const spacer = document.querySelector(".ScrollContainer__spacer");
    const newDimensions = getRefDimensions(viewportRef);
    if (newDimensions.height !== spacer.offsetHeight) {
      spacer.style.height = `${newDimensions.height}px`;
      console.log(newDimensions.height, spacer.offsetHeight);
    }
  }, [viewportRef]);

  return (
    <>
      <div ref={viewportRef} className="ScrollContainer">
        {children}
      </div>
      <div className="ScrollContainer__spacer" />
    </>
  );
}

export default ScrollContainer;
