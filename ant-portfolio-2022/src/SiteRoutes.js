import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import { useContext } from "react";
import { ShopContext } from "./context/shopContext";

function SiteRoutes() {
  const { products } = useContext(ShopContext);

  return (
    <Routes>
      <Route exact path="/" element={<Homepage productList={products} />} />
      <Route exact path="/products/:productHandle" element={<ProductPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default SiteRoutes;
