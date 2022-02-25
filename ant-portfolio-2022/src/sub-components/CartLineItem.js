import "../style/sub-components/CartLineItem.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";
import { v4 as uuidv4 } from "uuid";

function CartLineItem({ item }) {
  const dispatch = useDispatch();
  let cartStyle = {
    CartLineItemImage: {
      backgroundImage: `url(${item.variant.image.src})`,
    },
  };
  let { cartDisplay } = useSelector((state) => state);
  const { toggleCartDisplay, toggleCartOpacity } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const getImageString = function (src, size) {
    return src
      .replace(
        /_(pico|icon|thumb|small|compact|medium|large|grande|original|1024x1024|2048x2048|master)+\./g,
        "."
      )
      .replace(/\.jpg|\.png|\.gif|\.jpeg/g, function (match) {
        return "_" + size + match;
      });
  };

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
        {item.variant.selectedOptions.length > 0 ? (
          item.variant.selectedOptions.map((option) => {
            return (
              <div
                key={uuidv4()}
                className="CartLineItem__product-variant-option"
              >{`${option.name}: ${option.value}`}</div>
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
