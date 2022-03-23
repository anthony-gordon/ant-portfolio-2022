import "../style/sub-components/NavLogo.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";

function NavLogo() {
  const dispatch = useDispatch();

  let { menuDisplay, cartDisplay } = useSelector((state) => state);
  const {
    toggleMenuDisplay,
    toggleMenuOpacity,
    toggleCartOpacity,
    toggleCartDisplay,
    updateCursorHover,
  } = bindActionCreators(actionCreators, dispatch);

  function toggleMenuDisplayOpacity() {
    updateCursorHover(false);

    if (cartDisplay) {
      toggleCartOpacity();
      setTimeout(() => {
        toggleCartDisplay();
      }, 500);
    }

    if (menuDisplay) {
      toggleMenuOpacity();
      setTimeout(() => {
        updateCursorHover(true);
        setTimeout(() => {
          toggleMenuDisplay();
        }, 250);
      }, 250);
    } else {
      setTimeout(() => {
        updateCursorHover(true);
      }, 250);
    }
  }
  return (
    <h1 className="NavLogo">
      <Link className="NavLogo__link" to={`/`}>
        <div
          onMouseEnter={() => updateCursorHover(true)}
          onMouseLeave={() => updateCursorHover(false)}
          onClick={toggleMenuDisplayOpacity}
          className="NavLogo__text"
        >
          Anthony Gordon
        </div>
      </Link>
    </h1>
  );
}

export default NavLogo;
