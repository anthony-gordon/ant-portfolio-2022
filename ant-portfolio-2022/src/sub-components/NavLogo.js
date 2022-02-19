import "../style/sub-components/NavLogo.css";
import { ReactComponent as NavBarLogoImage } from "../images/robbieheader.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";

function NavLogo() {
  const dispatch = useDispatch();

  let { menuDisplay } = useSelector((state) => state);
  const { toggleMenuDisplay, toggleMenuOpacity } = bindActionCreators(
    actionCreators,
    dispatch
  );

  function toggleMenuDisplayOpacity() {
    if (menuDisplay) {
      toggleMenuOpacity();
      setTimeout(() => {
        toggleMenuDisplay();
      }, 500);
    }
  }
  return (
    <h1 className="NavLogo">
      <Link to={`/`}>
        <NavBarLogoImage
          onClick={toggleMenuDisplayOpacity}
          alt="Robbie Motion"
          className="NavBar__logo-image"
        />
      </Link>
    </h1>
  );
}

export default NavLogo;
