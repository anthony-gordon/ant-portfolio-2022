import "../style/components/NavMenu.css";
import NavMenuLi from "./../sub-components/NavMenuLi";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { LayoutContext } from "../context/layoutContext";

function NavMenu() {
  let { menuOpacity, menuDisplay, scrollBarWidth } = useSelector(
    (state) => state
  );
  const { navMenuItems } = useContext(LayoutContext);
  return (
    <nav
      style={{ paddingRight: `${scrollBarWidth}px` }}
      className={`NavMenu ${menuOpacity ? "NavMenu--visible" : ""} ${
        menuDisplay ? "NavMenu--active" : ""
      }`}
    >
      <div className="NavMenu__wrapper">
        <ul className="NavMenu__ul">
          {navMenuItems.map((menuItem, index) => {
            return (
              <NavMenuLi
                key={menuItem.key}
                menuItem={menuItem}
                index={index + 1}
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavMenu;
