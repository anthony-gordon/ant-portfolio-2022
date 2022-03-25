import "../style/components/CursorWrapper.css";
import { ShopContext } from "../context/shopContext";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { animated as a, useSpring, useTransition } from "react-spring";

function CursorWrapper() {
  let { loadingVisible, cursorHover } = useSelector((state) => state);
  const { mousePositionX, mousePositionY } = useContext(ShopContext);
  const getNumber = 10;
  return (
    <div className="CursorWrapper">
      <a.div>
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
            className={`Cursor__ball
                cursorHover ? "Cursor__ball--hover" : ""
              }`}
          >
            <a.div
              className={`Cursor__ball-inner
              ${cursorHover ? "Cursor__ball-inner--hover" : ""}`}
            ></a.div>
          </a.div>
        </a.div>
      </a.div>
    </div>
  );
}

export default CursorWrapper;
