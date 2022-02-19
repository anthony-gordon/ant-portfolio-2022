import "../style/sub-components/ArtworkGridItem.css";
import { Link } from "react-router-dom";
import { useSpring, animated as a } from "react-spring";

function ArtworkGridItem({ artwork }) {
  const [hoverOpacity, setHoverOpacity] = useSpring(() => ({
    opacity: 0,
  }));
  return (
    <div className="ArtworkGridItem">
      <Link
        className="ArtworkGridItem__link"
        to={`/artwork/${artwork.name.replaceAll(" ", "_").toLowerCase()}`}
      >
        <div>
          <img className="ArtworkGridItem__image" src={artwork.url} />
          <a.div
            onMouseEnter={() =>
              setHoverOpacity({
                opacity: 1,
              })
            }
            onMouseLeave={() =>
              setHoverOpacity({
                opacity: 0,
              })
            }
            style={hoverOpacity}
            className="ArtworkGridItem__title-wrapper"
          >
            <h2 className="ArtworkGridItem__title">
              {artwork.name} - {artwork.year}
            </h2>
          </a.div>
          <div className="ArtworkGridItem__caption">{`${artwork.name} - ${artwork.year}`}</div>
        </div>
      </Link>
    </div>
  );
}

export default ArtworkGridItem;
