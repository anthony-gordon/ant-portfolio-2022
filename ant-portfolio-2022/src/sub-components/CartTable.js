import CartLineItem from "./CartLineItem";
import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import "../style/sub-components/CartTable.css";

function CartTable() {
  const { checkout } = useContext(ShopContext);
  return (
    <table className="CartTable">
      <thead className="CartTable__header">
        <tr>
          <th className="CartTable__header-cell-item" scope="col" colSpan="4">
            Item
          </th>
          <th
            className="CartTable__header-cell-quantity"
            scope="col"
            colSpan="1"
          >
            Quantity
          </th>
          <th className="CartTable__header-cell-total" scope="col" colSpan="1">
            Total
          </th>
        </tr>
      </thead>

      <tbody className="CartTable__body">
        {checkout &&
          checkout.lineItems &&
          checkout.lineItems.map((item, index) => {
            return <CartLineItem key={item.id} item={item} index={index + 1} />;
          })}
      </tbody>
    </table>
  );
}
export default CartTable;
