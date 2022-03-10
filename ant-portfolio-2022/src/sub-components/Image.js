import "../style/sub-components/Image.css";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";

function Image({ src, size, aspect }) {
  const { getImageString } = useContext(ShopContext);

  return (
    <div className="Image">
      <div className="Image__wrapper">
        <img className="Image__image" src={getImageString(src, size)} />
      </div>
    </div>
  );
}

export default Image;
