import "./../style/pages/Homepage.css";
import React from "react";
import ProductGrid from "./../components/ProductGrid";
import Loading from "./../sub-components/Loading";

function Homepage({ productList }) {
  return (
    <div className="Homepage">
      {productList && productList.length > 0 ? (
        <ProductGrid productList={productList} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Homepage;
