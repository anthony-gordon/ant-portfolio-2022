import { combineReducers } from "redux";

import toggleMenuOpacityReducer from "./toggleMenuOpacityReducer";
import toggleMenuDisplayReducer from "./toggleMenuDisplayReducer";
import updateArtworkListReducer from "./updateArtworkListReducer";
import updateWindowSizeReducer from "./updateWindowSizeReducer";
import updateLoadingReducer from "./updateLoadingReducer";
import toggleCartDisplayReducer from "./toggleCartDisplayReducer";
import toggleCartOpacityReducer from "./toggleCartOpacityReducer";
import updateLoadingOuterBackgroundInFrameReducer from "./updateLoadingOuterBackgroundInFrameReducer";
import updateLoadingVisibleReducer from "./updateLoadingVisibleReducer";
import updateLoadingDisplayReducer from "./updateLoadingDisplayReducer";
import updateYOffsetReducer from "./updateYOffsetReducer";
import updateCursorHoverReducer from "./updateCursorHoverReducer";
import updateHoverDeviceReducer from "./updateHoverDeviceReducer";
import updateCheckoutUpdatingReducer from "./updateCheckoutUpdatingReducer";

const reducers = combineReducers({
  menuDisplay: toggleMenuDisplayReducer,
  menuOpacity: toggleMenuOpacityReducer,
  artworkList: updateArtworkListReducer,
  windowSize: updateWindowSizeReducer,
  loading: updateLoadingReducer,
  cartDisplay: toggleCartDisplayReducer,
  cartOpacity: toggleCartOpacityReducer,
  loadingOuterBackgroundInFrame: updateLoadingOuterBackgroundInFrameReducer,
  loadingVisible: updateLoadingVisibleReducer,
  loadingDisplay: updateLoadingDisplayReducer,
  YOffset: updateYOffsetReducer,
  cursorHover: updateCursorHoverReducer,
  hoverDevice: updateHoverDeviceReducer,
  checkoutUpdating: updateCheckoutUpdatingReducer,
});

export default reducers;
