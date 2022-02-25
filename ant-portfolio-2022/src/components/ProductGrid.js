import "../style/components/ProductGrid.css";
import { useSelector } from "react-redux";

import ProductGridItem from "../sub-components/ProductGridItem";
import { v4 as uuidv4 } from "uuid";

function ProductGrid({ productList }) {
  let { windowSize } = useSelector((state) => state);

  return (
    <div className="ProductGrid">
      {windowSize[0] < 769 ? (
        productList.map((product, index) => {
          return <ProductGridItem key={uuidv4()} product={product} />;
        })
      ) : (
        <div className="ProductGrid__column-wrapper">
          <div className="ProductGrid__column">
            {productList.map((product, index) => {
              if (index % 2 === 0) {
                return <ProductGridItem key={uuidv4()} product={product} />;
              }
            })}
          </div>
          <div className="ProductGrid__column">
            {productList.map((product, index) => {
              if (index % 2 !== 0) {
                return <ProductGridItem key={uuidv4()} product={product} />;
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductGrid;
