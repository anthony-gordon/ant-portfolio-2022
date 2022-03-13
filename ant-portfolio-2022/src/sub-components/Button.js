import "./../style/sub-components/Button.css";
import { Link } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useSpring, animated as a } from "react-spring";

function Button({ text, link }) {
  return (
    <button className="ProductPage__add-to-cart-button">
      <span className="ProductPage__add-to-cart-text">Add to cart</span>
    </button>
  );
}

export default Button;
