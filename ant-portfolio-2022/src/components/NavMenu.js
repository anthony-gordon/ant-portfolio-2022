import "../style/components/NavMenu.css";
import NavMenuLi from "./../sub-components/NavMenuLi";
import { useSelector, shallowEqual } from "react-redux";
import { useEffect, useMemo } from "react";
import { settings } from "../context/settings";

function NavMenu() {
  let menuOpacity = useSelector((state) => state.menuOpacity, shallowEqual);
  let menuDisplay = useSelector((state) => state.menuDisplay, shallowEqual);
  let scrollBarWidth = useSelector(
    (state) => state.scrollBarWidth,
    shallowEqual
  );

  const navMenuItems = settings.nav_menu.nav_menu_items;

  // useEffect(() => {
  //   console.log("Nav Menu re-render");
  // });
  return useMemo(() => {
    return (
      <nav
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
  }, [menuOpacity, menuDisplay, scrollBarWidth]);
}

export default NavMenu;
