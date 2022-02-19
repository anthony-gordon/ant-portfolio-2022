import "./../style/pages/ProductPage.css";
import React from "react";
import { useSelector } from "react-redux";

function ProductPage() {
  let { product } = useSelector((state) => state);
  return <div className="ProductPage">{product ? product.title : ""}</div>;
}

export default ProductPage;
