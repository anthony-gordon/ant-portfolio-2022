import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";
import { useSelector } from "react-redux";

function FadeUpAndIn({ children }) {
  const [visibility, setVisibility] = useState(false);
  let { loadingVisible } = useSelector((state) => state);
  const fadeInAndMove = useSpring({
    transform: visibility
      ? "translate3d(0px, 0px, 0px)"
      : "translate3d(0px, 40px, 0px)",
    opacity: visibility ? 1 : 0,
  });

  if (!loadingVisible) {
    return (
      <VisibilitySensor
        className={visibility ? "visible" : ""}
        partialVisibility
        onChange={(isVisible) => {
          if (isVisible) {
            setVisibility(true);
          }
        }}
      >
        <animated.div className="fade-in-and-up-wrapper" style={fadeInAndMove}>
          {children}
        </animated.div>
      </VisibilitySensor>
    );
  } else {
    return <div></div>;
  }
}

export default FadeUpAndIn;
