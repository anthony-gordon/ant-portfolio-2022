import React, { useEffect, createRef } from "react";
import "./../style/components/ScrollContainer.css";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function ScrollContainer({ children }) {
  const viewportRef = createRef();

  const dispatch = useDispatch();
  const { updateScrollBarWidth } = bindActionCreators(actionCreators, dispatch);

  function getRefDimensions(ref) {
    if (ref.current) {
      const { current } = ref;
      const boundingRect = current.getBoundingClientRect();
      const { width, height } = boundingRect;
      return { width: Math.round(width), height: Math.round(height) };
    }
  }

  const loadingVisible = useSelector(
    (state) => state.loadingVisible,
    shallowEqual
  );

  const bodyNoScroll = useSelector((state) => state.bodyNoScroll, shallowEqual);

  useEffect(() => {
    const spacer = document.querySelector(".ScrollContainer__spacer");
    const newDimensions = getRefDimensions(viewportRef);
    if (newDimensions.height !== spacer.offsetHeight) {
      spacer.style.height = `${newDimensions.height}px`;
      console.log(newDimensions.height, spacer.offsetHeight);
    }
    if (!bodyNoScroll) {
      updateScrollBarWidth(
        window.innerWidth - document.documentElement.clientWidth
      );
      console.log(
        "updateScrollBarWidth",
        window.innerWidth - document.documentElement.clientWidth
      );
    }
  }, [loadingVisible]);

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
