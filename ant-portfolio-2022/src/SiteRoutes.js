import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import { ShopContext } from "./context/shopContext";

import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";

function SiteRoutes() {
  const { variantsAsProducts } = useContext(ShopContext);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Homepage productList={variantsAsProducts} />}
      />
      {/* <Route exact path="/products/:productHandle" element={<ProductPage />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
      {/* <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
  );
}

export default SiteRoutes;
