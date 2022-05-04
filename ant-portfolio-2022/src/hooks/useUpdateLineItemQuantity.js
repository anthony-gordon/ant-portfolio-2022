import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import useSetCursorHover from "./useSetCursorHover";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";

export default function useUpdateLineItemQuantity() {
  const { updateLineItems } = useContext(ShopContext);
  const { setCursorHover } = useSetCursorHover();
  const dispatch = useDispatch();
  const { updateCheckoutUpdating } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const updateLineItemQuantity = (variantId, quantity, change, checkoutId) => {
    const newQuantity = quantity + change;
    updateCheckoutUpdating(true);
    setCursorHover(false);
    setTimeout(() => setCursorHover(true), 250);
    updateLineItems(variantId, newQuantity, checkoutId).then(() => {
      updateCheckoutUpdating(false);
    });
  };
  return { updateLineItemQuantity };
}
