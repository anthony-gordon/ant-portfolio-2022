import "../style/components/NothingHere.css";
import { Link } from "react-router-dom";

function NothingHere() {
  return (
    <div className="NothingHere">
      <h2>
        Nothing here! <Link to="/">Return home?</Link>
      </h2>
    </div>
  );
}

export default NothingHere;
