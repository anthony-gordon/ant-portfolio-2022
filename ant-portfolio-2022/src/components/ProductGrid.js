import "../style/components/ProductGrid.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ProductGridItem from "../sub-components/ProductGridItem";
import { v4 as uuidv4 } from "uuid";

function ProductGrid({ productList }) {
  return (
    <div className="ProductGrid">
      {productList.map((product, index) => {
        return <ProductGridItem key={product.id} product={product} />;
      })}
    </div>
  );
}
export default ProductGrid;
