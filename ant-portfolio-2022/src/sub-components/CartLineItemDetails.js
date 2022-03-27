import "../style/sub-components/CartLineItemDetails.css";
import { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";
import { ShopContext } from "../context/shopContext";
import { LayoutContext } from "../context/layoutContext";
import ClickLink from "./ClickLink";

function CartLineItemDetails({ item }) {
  const {
    getImageString,
    checkout,
    updateLineItems,
    addRemoveFixedPositionOnBody,
    generateProductLink,
    updateLineItemQuantity,
  } = useContext(ShopContext);
  const { cartClose, generateLineItemOptions, strings } =
    useContext(LayoutContext);
  const [lineItemOptions] = useState(generateLineItemOptions(item));
  const dispatch = useDispatch();
  let { windowSize } = useSelector((state) => state);
  const {
    toggleCartDisplay,
    toggleCartOpacity,
    updateCursorHover,
    updateCheckoutUpdating,
  } = bindActionCreators(actionCreators, dispatch);

  function handleClick(number) {
    updateLineItemQuantity(
      item.id,
      number,
      checkout.id,
      updateCheckoutUpdating,
      updateCursorHover,
      updateLineItems
    );
  }

  function handleLinkClick() {
    cartClose(
      windowSize,
      toggleCartDisplay,
      toggleCartOpacity,
      updateCursorHover,
      addRemoveFixedPositionOnBody
    );
  }

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
            onClick={handleLinkClick}
            className="CartLineItemDetails__product-title"
          >{`${item.title}`}</div>
        </ClickLink>
        <div className="CartLineItemDetails__product-price">
          {`$${item.variant.price} NZ`}
        </div>
        {lineItemOptions.length > 0 &&
          lineItemOptions.map((option) => {
            return (
              <div
                key={option.key}
                className={`CartLineItemDetails__product-variant-option ${
                  option.option_details.value == "Default Title"
                    ? "CartLineItemDetails__product-variant-option--hidden"
                    : ""
                }`}
              >{`${option.option_details.name}: ${option.option_details.value}`}</div>
            );
          })}
        <div
          onClick={() => handleClick(0)}
          onMouseEnter={() => updateCursorHover(true)}
          onMouseLeave={() => updateCursorHover(false)}
          className="CartLineItemDetails__remove"
        >
          {strings.cart.remove_line_item}
        </div>
      </div>
    </>
  );
}

export default CartLineItemDetails;
