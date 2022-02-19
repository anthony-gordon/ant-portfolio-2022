import "./../style/sub-components/LinksPageLink.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useSpring, animated as a } from "react-spring";

function LinksPageLink({ link }) {
  const [elementHoverColor, setElementHoverColor] = useSpring(() => ({
    color: "black",
    backgroundColor: "white",
  }));
  return (
    <a.li
      style={elementHoverColor}
      onMouseEnter={() =>
        setElementHoverColor({
          color: "white",
          backgroundColor: "black",
        })
      }
      onMouseLeave={() =>
        setElementHoverColor({
          color: "black",
          backgroundColor: "white",
        })
      }
      onClick={() =>
        setElementHoverColor({
          color: "black",
          backgroundColor: "white",
        })
      }
      className="LinksPage__li"
    >
      <a className="LinksPage__link" href={`${link.url}`}>
        <p className="LinksPage__link-text">{link.text}</p>
        <ArrowCircleRightIcon />
      </a>
    </a.li>
  );
}

export default LinksPageLink;
