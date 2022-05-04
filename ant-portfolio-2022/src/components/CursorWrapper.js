import "../style/components/CursorWrapper.css";

import { CursorWrapperContext } from "../context/cursorWrapperContext";

import { useSelector } from "react-redux";
import { useContext } from "react";
import { animated as a } from "react-spring";

function CursorWrapper() {
  const { mousePositionX, mousePositionY } = useContext(CursorWrapperContext);

  let { cursorHover } = useSelector((state) => state);
  return (
    <div className="CursorWrapper">
      <a.div
        style={{
          transform: mousePositionX.to(
            (mousePositionX) => `translate(${mousePositionX}px, 0px)  `
          ),
        }}
        className="Cursor__ball-wrapper"
      >
        <a.div
          style={{
            transform: mousePositionY.to(
              (mousePositionY) => `translate(0px, ${mousePositionY}px) `
            ),
          }}
          className={`Cursor__ball`}
        >
          <div
            className={`Cursor__ball-inner
              ${cursorHover ? "Cursor__ball-inner--hover" : ""}`}
          ></div>
        </a.div>
      </a.div>
    </div>
  );
}

export default CursorWrapper;
