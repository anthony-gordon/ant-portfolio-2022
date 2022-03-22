import "../style/sub-components/CartLineItem.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";
import { ShopContext } from "../context/shopContext";

function CartLineItem({ item, index }) {
  const { getImageString, randomId } = useContext(ShopContext);
  const [lineItemOptions] = useState(generateOptions());
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

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

  useEffect(() => {
    if (cartDisplay) {
      setTimeout(() => {
        setVisible(true);
      }, 100 + 200 * index);
    } else {
      setVisible(false);
    }
  }, [cartDisplay, index]);

  return (
    <tr
      className={`CartLineItem ${visible ? "CartLineItem__li--visible" : ""}`}
    >
      <td className="CartLineItem__product-wrapper">
        <div className="CartLineItem__product-image-wrapper">
          <img
            alt={item.variant.product.title}
            src={getImageString(item.variant.image.src, "medium")}
            className="CartLineItem__product-image"
          />
        </div>
        <div className="CartLineItem__product-details-wrapper">
          <Link
            to={`/products/${item.variant.product.handle}${
              item.variant.title !== "Default Title" ? "-" : ""
            }${
              item.variant.title !== "Default Title"
                ? item.variant.title.toLowerCase().replace(/ /g, "-")
                : ""
            }`}
            className="CartLineItem__product-link"
          >
            <div
              onClick={toggleCartDisplayOpacity}
              className="CartLineItem__product-title"
            >{`${item.title}`}</div>
          </Link>
          <div className="CartLineItem__product-price">
            {`$${item.variant.price} NZ`}
          </div>
          {lineItemOptions.length > 0 ? (
            lineItemOptions.map((option) => {
              return (
                <div
                  key={option.key}
                  className={`CartLineItem__product-variant-option ${
                    option.option_details.value == "Default Title"
                      ? "CartLineItem__product-variant-option--hidden"
                      : ""
                  }`}
                >{`${option.option_details.name}: ${option.option_details.value}`}</div>
              );
            })
          ) : (
            <div className="CartLineItem__product-variant-title">
              {item.variant.title}
            </div>
          )}
        </div>
      </td>
      <td className="CartLineItem__quantity-wrapper"></td>

      <td className="CartLineItem__total-wrapper">
        {`$${(item.variant.price * item.quantity).toFixed(2)} NZ`}
      </td>
    </tr>
  );
}

export default CartLineItem;
