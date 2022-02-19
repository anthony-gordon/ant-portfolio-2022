import "./../style/sub-components/BackLink.css";
import { Link } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useSpring, animated as a } from "react-spring";

function BackLink({ text, link }) {
  const [elementHoverColor, setElementHoverColor] = useSpring(() => ({
    color: "white",
    backgroundColor: "black",
  }));
  return (
    <a.div
      className="BackLink"
      style={elementHoverColor}
      onMouseEnter={() =>
        setElementHoverColor({
          color: "#000000",
          backgroundColor: "transparent",
        })
      }
      onMouseLeave={() =>
        setElementHoverColor({
          color: "#ffffff",
          backgroundColor: "#000000",
        })
      }
      onClick={() =>
        setElementHoverColor({
          color: "#ffffff",
          backgroundColor: "#000000",
        })
      }
    >
      <Link to={link} className="BackLink__link">
        <p className="BackLink__text">{text}</p>
        <KeyboardReturnIcon />
      </Link>
    </a.div>
  );
}

export default BackLink;
