import "../style/sub-components/Image.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import { ShopContext } from "../context/shopContext";
import { usePalette } from "react-palette";

function Image({ src, size, aspect }) {
  const { getImageString } = useContext(ShopContext);

  const [imageLoaded, setImageLoaded] = useState(false);

  const { data, loading, error } = usePalette(getImageString(src, "small"));

  const [imageDominantColor, setImageDominantColor] = useState("transparent");

  useEffect(() => {
    setImageDominantColor(data.vibrant);
  }, [data]);

  const style = {
    ProductGridItemImagePlaceholder: useSpring({
      width: `100%`,
      paddingBottom: `${aspect * 100}%`,
      backgroundColor: imageDominantColor,
      opacity: imageLoaded ? 0 : 1,
    }),
    ProductGridItemImage: useSpring({
      opacity: imageLoaded ? 1 : 0,
    }),
  };
  return (
    <div className="Image">
      <div className="Image__wrapper">
        <div
          style={style.ProductGridItemImagePlaceholder}
          className="Image__placeholder"
        ></div>

        <a.img
          className="Image__image"
          style={style.ProductGridItemImage}
          onLoad={() => setImageLoaded(true)}
          src={getImageString(src, size)}
        />
      </div>
    </div>
  );
}

export default Image;
