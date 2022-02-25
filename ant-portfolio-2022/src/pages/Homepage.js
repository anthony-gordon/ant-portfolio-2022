import "./../style/pages/Homepage.css";
import React from "react";
import ProductGrid from "./../components/ProductGrid";

function Homepage({ productList }) {
  return (
    <div className="Homepage">
      <ProductGrid productList={productList} />
    </div>
  );
}

export default Homepage;
