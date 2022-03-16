import "../style/components/ProductGrid.css";
import ProductGridItem from "../sub-components/ProductGridItem";

function ProductGrid({ productList }) {
  return (
    <div className="ProductGrid">
      {productList.map((product) => {
        return <ProductGridItem key={product.variant_id} product={product} />;
      })}
    </div>
  );
}
export default ProductGrid;
