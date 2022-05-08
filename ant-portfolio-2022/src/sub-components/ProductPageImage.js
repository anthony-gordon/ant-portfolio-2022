import "../style/sub-components/ProductPageImage.css";

function ProductPageImage({ src, size, aspect, product }) {
  return <img src={src} className="ProductPageImage" />;
}

export default ProductPageImage;
