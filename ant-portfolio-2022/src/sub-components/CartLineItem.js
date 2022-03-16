import "../style/sub-components/CartLineItem.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";
import { ShopContext } from "../context/shopContext";

function CartLineItem({ item }) {
  const { getImageString, randomId } = useContext(ShopContext);
  const [lineItemOptions] = useState(generateOptions());
  const dispatch = useDispatch();

  function generateOptions() {
    let optionsArray = [];
    item.variant.selectedOptions.forEach((option) => {
      let optionObject = {};
      optionObject[`option_details`] = option;
      optionObject[`key`] = randomId();

      optionsArray.push(optionObject);
    });
    return optionsArray;
  }

  let { cartDisplay } = useSelector((state) => state);
  const { toggleCartDisplay, toggleCartOpacity } = bindActionCreators(
    actionCreators,
    dispatch
  );

  function toggleCartDisplayOpacity() {
    if (!cartDisplay) {
      toggleCartDisplay();
      setTimeout(() => {
        toggleCartOpacity();
      }, 10);
    } else if (cartDisplay) {
      toggleCartOpacity();
      setTimeout(() => {
        toggleCartDisplay();
      }, 500);
    }
  }

  return (
    <tr onClick={toggleCartDisplayOpacity} className="CartLineItem">
      <td className="CartLineItem__product-image-wrapper">
        <img
          alt={item.variant.product.title}
          src={getImageString(item.variant.image.src, "medium")}
          className="CartLineItem__product-image"
        />
      </td>
      <td className="CartLineItem__product-details-wrapper">
        <Link
          to={`/products/${item.variant.product.handle}`}
          className="CartLineItem__product-link"
        >
          <h3 className="CartLineItem__product-title">{item.title}</h3>
        </Link>
        {lineItemOptions.length > 0 ? (
          lineItemOptions.map((option) => {
            return (
              <div
                key={option.key}
                className="CartLineItem__product-variant-option"
              >{`${option.option_details.name}: ${option.option_details.value}`}</div>
            );
          })
        ) : (
          <div className="CartLineItem__product-variant-title">
            {item.variant.title}
          </div>
        )}
        <div className="CartLineItem__product-price">
          {`$${item.variant.price} NZ`}
        </div>
      </td>

      <td className="CartLineItem__product-total-wrapper">
        {`$${(item.variant.price * item.quantity).toFixed(2)} NZ`}
      </td>
      <td className="CartLineItem__product-quantity-wrapper">
        <div className="CartLineItem__product-quantity-input-wrapper"></div>
        <div className="CartLineItem__product-quantity-error"></div>
      </td>
    </tr>
  );
}

export default CartLineItem;
