import { Routes, Route, useParams, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import { useSelector } from "react-redux";

function SiteRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/products/:productHandle" element={<ProductPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default SiteRoutes;
