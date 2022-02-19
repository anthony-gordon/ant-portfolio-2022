import React from "react";
import "../style/components/NavMenu.css";
import NavMenuLi from "./../sub-components/NavMenuLi";
import { useSelector } from "react-redux";
import { animated as a, useSpring } from "react-spring";
import { v4 as uuidv4 } from "uuid";

function NavMenu() {
  let { scrollBarWidth, navBarHeight, menuOpacity, menuDisplay } = useSelector(
    (state) => state
  );

  const style = {
    NavMenu: useSpring({
      opacity: menuOpacity ? 1 : 0,
      paddingRight: `${scrollBarWidth}px`,
      paddingTop: `${navBarHeight}px`,
    }),
    NavMenuButton: useSpring({
      letterSpacing: "0.1rem",
    }),
  };

  const menuItems = [
    {
      words: ["About"],
      link: "/about",
      internal: true,
    },
    {
      words: ["Links"],
      link: "/links",
      internal: true,
    },
    {
      words: ["Portfolio"],
      link: "/artworks/1",
      internal: true,
    },
    {
      words: ["Contact"],
      link: "/contact",
      internal: true,
    },
    {
      words: ["Shop"],
      link: "/shop",
      internal: false,
    },
  ];

  return (
    <a.nav
      style={style.NavMenu}
      className={`NavMenu ${menuDisplay ? "NavMenu--active" : ""}`}
    >
      <ul className="NavMenu__ul">
        {menuItems.map((menuItem) => {
          return <NavMenuLi key={uuidv4()} menuItem={menuItem} />;
        })}
      </ul>
    </a.nav>
  );
}

export default NavMenu;
