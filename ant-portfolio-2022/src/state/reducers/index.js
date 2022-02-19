import { combineReducers } from "redux";

import toggleMenuOpacityReducer from "./toggleMenuOpacityReducer";
import toggleMenuDisplayReducer from "./toggleMenuDisplayReducer";
import updateArtworkListReducer from "./updateArtworkListReducer";
import updateWindowSizeReducer from "./updateWindowSizeReducer";
import updateLoadingReducer from "./updateLoadingReducer";
import updateProductReducer from "./updateProductReducer";
import updateProductsReducer from "./updateProductsReducer";
import updateCheckoutReducer from "./updateCheckoutReducer";
import updateIsCartOpenReducer from "./updateIsCartOpenReducer";
import updateClientReducer from "./updateClientReducer";

const reducers = combineReducers({
  menuDisplay: toggleMenuDisplayReducer,
  menuOpacity: toggleMenuOpacityReducer,
  artworkList: updateArtworkListReducer,
  windowSize: updateWindowSizeReducer,
  loading: updateLoadingReducer,
  product: updateProductReducer,
  products: updateProductsReducer,
  checkout: updateCheckoutReducer,
  isCartOpen: updateIsCartOpenReducer,
  client: updateClientReducer,
});

export default reducers;
