import "../style/sub-components/NavHamburgerIcon.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";

function NavHamburgerIcon() {
  const dispatch = useDispatch();

  let { menuDisplay, menuOpacity } = useSelector((state) => state);
  const { toggleMenuDisplay, toggleMenuOpacity } = bindActionCreators(
    actionCreators,
    dispatch
  );

  function toggleMenuDisplayOpacity() {
    if (!menuDisplay) {
      toggleMenuDisplay();
      setTimeout(() => {
        toggleMenuOpacity();
      }, 10);
    } else if (menuDisplay) {
      toggleMenuOpacity();
      setTimeout(() => {
        toggleMenuDisplay();
      }, 500);
    }
  }
  return (
    <div className="NavHamburgerIcon">
      <div
        onClick={toggleMenuDisplayOpacity}
        className={`NavHamburgerIcon__wrapper${
          menuOpacity ? " NavHamburgerIcon__wrapper--open" : ""
        } ${
          menuDisplay !== menuOpacity
            ? "NavHamburgerIcon__wrapper--unclickable"
            : ""
        }`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default NavHamburgerIcon;
