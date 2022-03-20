import "./../style/pages/Homepage.css";
import ProductGrid from "./../components/ProductGrid";

function Homepage({ productList }) {
  return (
    <main className="Homepage">
      {productList && productList.length > 0 && (
        <ProductGrid productList={productList} />
      )}
    </main>
  );
}

export default Homepage;
