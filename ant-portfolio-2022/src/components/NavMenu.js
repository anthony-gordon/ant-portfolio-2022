import "../style/components/NavMenu.css";
import NavMenuLi from "./../sub-components/NavMenuLi";
import { useSelector } from "react-redux";
import { useContext, useState } from "react";
import { ShopContext } from "../context/shopContext";

function NavMenu() {
  let { menuOpacity, menuDisplay, scrollBarWidth } = useSelector(
    (state) => state
  );

  const { randomId } = useContext(ShopContext);
  const style = {
    NavMenu: {
      paddingRight: `${scrollBarWidth}px`,
    },
  };

  const [menuItems] = useState([
    {
      words: ["About"],
      link: "/about",
      internal: true,
      key: randomId(),
    },
    {
      words: ["Links"],
      link: "/links",
      internal: true,
      key: randomId(),
    },
    {
      words: ["Portfolio"],
      link: "/artworks/1",
      internal: true,
      key: randomId(),
    },
    {
      words: ["Contact"],
      link: "/contact",
      internal: true,
      key: randomId(),
    },
    {
      words: ["Shop"],
      link: "/shop",
      internal: false,
      key: randomId(),
    },
  ]);

  return (
    <nav
      style={style.NavMenu}
      className={`NavMenu ${menuOpacity ? "NavMenu--visible" : ""} ${
        menuDisplay ? "NavMenu--active" : ""
      }`}
    >
      <div className="NavMenu__wrapper">
        <ul className="NavMenu__ul">
          {menuItems.map((menuItem, index) => {
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
