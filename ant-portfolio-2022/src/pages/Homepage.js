import "./../style/pages/Homepage.css";
import ProductGrid from "./../components/ProductGrid";

function Homepage({ productList }) {
  return (
    <div className="Homepage">
      {productList && productList.length > 0 && (
        <ProductGrid productList={productList} />
      )}
    </div>
  );
}

export default Homepage;
