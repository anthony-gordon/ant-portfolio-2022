import { navLogoClick } from "./navLogoClick";
import { cartIconClick, cartClose } from "./cartIconClick";
import { gridScroll } from "../helpers/gridScroll";
import { updateLineItemQuantity } from "./updateLineItemQuantity";
import { generateLineItemOptions } from "./generateLineItemOptions";
import { generateProductLink } from "./generateProductLink";
import { formatMoney } from "./formatMoney";
import { getImageString } from "./getImageString";

export const helpers = {
  navLogoClick: navLogoClick,
  gridScroll: gridScroll,
  cartIconClick: cartIconClick,
  cartClose: cartClose,
  updateLineItemQuantity: updateLineItemQuantity,
  generateLineItemOptions: generateLineItemOptions,
  generateProductLink: generateProductLink,
  formatMoney: formatMoney,
  getImageString: getImageString,
};
