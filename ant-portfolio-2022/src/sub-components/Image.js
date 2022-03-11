import "../style/sub-components/Image.css";
import { useContext, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { useSpring, animated as a } from "react-spring";

function Image({ src, size, aspect }) {
  const { getImageString } = useContext(ShopContext);
  const [imageHoverStyle, setImageHoverStyle] = useSpring(() => ({
    transform: "scale3d(1,1,1)",
    boxShadow: `5px 5px 10px rgba(46, 42, 57, 0.2)`,
    maxHeight: aspect > 1 ? "100%" : "auto",

    maxWidth: aspect > 1 ? "auto" : "100%",
  }));
  return (
    <div className="Image">
      <div className="Image__wrapper">
        <a.img
          style={imageHoverStyle}
          onMouseEnter={() =>
            setImageHoverStyle({
              transform: "scale3d(1.05,1.05,1.05)",
              boxShadow: `7px 7px 13px rgba(46, 42, 57, 0.15)`,
            })
          }
          onMouseLeave={() =>
            setImageHoverStyle({
              transform: "scale3d(1,1,1)",
              boxShadow: `5px 5px 10px rgba(46, 42, 57, 0.2)`,
            })
          }
          onClick={() =>
            setImageHoverStyle({
              transform: "scale3d(1,1,1)",
              boxShadow: `5px 5px 10px rgba(46, 42, 57, 0.2)`,
            })
          }
          className="Image__image"
          src={getImageString(src, size)}
        />
      </div>
    </div>
  );
}

export default Image;
