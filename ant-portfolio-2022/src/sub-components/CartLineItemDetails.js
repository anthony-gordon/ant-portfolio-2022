import "../style/sub-components/CartLineItemDetails.css";

import { useContext } from "react";

import CartLineItemDetailsOptions from "./CartLineItemDetailsOptions";
import ClickLink from "./ClickLink";
import { helpers } from "./../helpers/helpersIndex";
import { ShopContext } from "../context/shopContext";
import { strings } from "../context/strings";

import useUpdateLineItemQuantity from "../hooks/useUpdateLineItemQuantity";
import useHandleCartIconClick from "../hooks/useHandleCartIconClick";
import useSetCursorHover from "../hooks/useSetCursorHover";

function CartLineItemDetails({ item }) {
  const { checkout } = useContext(ShopContext);
  const { updateLineItemQuantity } = useUpdateLineItemQuantity();
  const { handleCartIconClick } = useHandleCartIconClick();
  const { setCursorHover } = useSetCursorHover();

  const { getImageString, generateProductLink, formatMoney } = helpers;

  return (
    <>
      <div className="CartLineItemDetails__product-image-wrapper">
        <img
          alt={item.variant.product.title}
          src={getImageString(item.variant.image.src, "medium")}
          className="CartLineItemDetails__product-image"
        />
      </div>
      <div className="CartLineItemDetails__product-details-wrapper">
        <ClickLink
          to={generateProductLink(
            item.variant.product.handle,
            item.variant.title
          )}
          className="CartLineItemDetails__product-link"
        >
          <div
            onClick={() => handleCartIconClick()}
            className="CartLineItemDetails__product-title"
          >{`${item.title}`}</div>
        </ClickLink>
        <div className="CartLineItemDetails__product-price">
          {checkout &&
            `${formatMoney(
              parseFloat(item.variant.price) * 100,
              "${{amount}}"
            )}  ${checkout.currencyCode}`}
        </div>
        <CartLineItemDetailsOptions item={item} />
        <div
          onClick={() =>
            updateLineItemQuantity(
              item.id,
              item.quantity,
              0 - item.quantity,
              checkout.id
            )
          }
          onMouseEnter={() => setCursorHover(true)}
          onMouseLeave={() => setCursorHover(false)}
          className="CartLineItemDetails__remove"
        >
          {strings.cart.remove_line_item}
        </div>
      </div>
    </>
  );
}

export default CartLineItemDetails;
