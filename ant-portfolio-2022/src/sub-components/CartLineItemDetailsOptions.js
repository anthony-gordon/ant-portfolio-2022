import "./../style/sub-components/CartLineItemDetailsOptions.css";

import { helpers } from "./../helpers/helpersIndex";

import { useState } from "react";

function CartLineItemDetailsOptions({ item }) {
  const { generateLineItemOptions } = helpers;
  const [lineItemOptions] = useState(generateLineItemOptions(item));

  return (
    <div className="CartLineItemDetailsOptions">
      {" "}
      {lineItemOptions.length > 0 &&
        lineItemOptions.map((option) => {
          return (
            <div
              key={option.key}
              className={`CartLineItemDetailsOptions__option ${
                option.option_details.value == "Default Title"
                  ? "CartLineItemDetailsOptions__option--hidden"
                  : ""
              }`}
            >{`${option.option_details.name}: ${option.option_details.value}`}</div>
          );
        })}
    </div>
  );
}

export default CartLineItemDetailsOptions;
