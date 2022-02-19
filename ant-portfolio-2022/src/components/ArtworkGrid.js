import "../style/components/ArtworkGrid.css";
import { useSelector } from "react-redux";
import ArtworkGridItem from "../sub-components/ArtworkGridItem";
import { v4 as uuidv4 } from "uuid";

function ArtworkGrid({ artworkList }) {
  let { windowSize } = useSelector((state) => state);

  return (
    <div className="ArtworkGrid">
      {windowSize[0] < 769 ? (
        artworkList.map((artwork, index) => {
          return <ArtworkGridItem key={uuidv4()} artwork={artwork} />;
        })
      ) : (
        <div className="ArtworkGrid__column-wrapper">
          <div className="ArtworkGrid__column">
            {artworkList.map((artwork, index) => {
              if (index % 2 === 0) {
                return <ArtworkGridItem key={uuidv4()} artwork={artwork} />;
              }
            })}
          </div>
          <div className="ArtworkGrid__column">
            {artworkList.map((artwork, index) => {
              if (index % 2 !== 0) {
                return <ArtworkGridItem key={uuidv4()} artwork={artwork} />;
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default ArtworkGrid;
