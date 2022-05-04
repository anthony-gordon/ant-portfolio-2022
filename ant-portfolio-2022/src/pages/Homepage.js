import "./../style/pages/Homepage.css";
import ProductGrid from "./../components/ProductGrid";
import ProductGridProvider from "./../context/productGridContext";

function Homepage({ productList }) {
  return (
    <main className="Homepage">
      {productList && productList.length > 0 && (
        <ProductGridProvider productList={productList}>
          <ProductGrid />
        </ProductGridProvider>
      )}
    </main>
  );
}

export default Homepage;
