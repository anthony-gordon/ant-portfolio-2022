import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";

import { useContext } from "react";
import { ShopContext } from "./context/shopContext";

function SiteRoutes() {
  const { products, variantsAsProducts } = useContext(ShopContext);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Homepage productList={variantsAsProducts} />}
      />
      <Route exact path="/products/:productHandle" element={<ProductPage />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default SiteRoutes;
