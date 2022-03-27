import { navLogoClick } from "./navLogoClick";
import { cartIconClick, cartClose } from "./cartIconClick";
import { navMenuItems } from "./navMenuItems";
import { gridScroll } from "../helpers/gridScroll";
import { menuIconClick } from "./menuIconClick";
import { updateLineItemQuantity } from "./updateLineItemQuantity";
import { generateLineItemOptions } from "./generateLineItemOptions";
import { strings } from "./strings";
import { generateProductLink } from "./generateProductLink";

export const helpers = {
  navLogoClick: navLogoClick,
  gridScroll: gridScroll,
  menuIconClick: menuIconClick,
  cartIconClick: cartIconClick,
  cartClose: cartClose,
  navMenuItems: navMenuItems,
  updateLineItemQuantity: updateLineItemQuantity,
  generateLineItemOptions: generateLineItemOptions,
  strings: strings,
  generateProductLink: generateProductLink,
};
