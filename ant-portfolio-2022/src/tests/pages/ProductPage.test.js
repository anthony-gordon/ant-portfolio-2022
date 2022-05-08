import React from "react";
import { render } from "./../test-utils";

import ProductPage from "./../../pages/ProductPage";

test("product page renders with redux", () => {
  render(<ProductPage />);
});
