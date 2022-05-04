import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import toggleMenuOpacityReducer from "./../state/reducers/toggleMenuOpacityReducer";
import toggleMenuDisplayReducer from "./../state/reducers/toggleMenuDisplayReducer";
import updateArtworkListReducer from "./../state/reducers/updateArtworkListReducer";
import updateWindowSizeReducer from "./../state/reducers/updateWindowSizeReducer";
import updateLoadingReducer from "./../state/reducers/updateLoadingReducer";
import toggleCartDisplayReducer from "./../state/reducers/toggleCartDisplayReducer";
import toggleCartOpacityReducer from "./../state/reducers/toggleCartOpacityReducer";
import updateLoadingOuterBackgroundInFrameReducer from "./../state/reducers/updateLoadingOuterBackgroundInFrameReducer";
import updateLoadingVisibleReducer from "./../state/reducers/updateLoadingVisibleReducer";
import updateLoadingDisplayReducer from "./../state/reducers/updateLoadingDisplayReducer";
import updateYOffsetReducer from "./../state/reducers/updateYOffsetReducer";
import updateCursorHoverReducer from "./../state/reducers/updateCursorHoverReducer";
import updateHoverDeviceReducer from "./../state/reducers/updateHoverDeviceReducer";
import updateCheckoutUpdatingReducer from "./../state/reducers/updateCheckoutUpdatingReducer";
import updateCartCountReducer from "./../state/reducers/updateCartCountReducer";
import updateScrollBarWidthReducer from "./../state/reducers/updateScrollBarWidthReducer";
import updateBodyNoScrollReducer from "./../state/reducers/updateBodyNoScrollReducer";

function render(
  component,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        menuDisplay: toggleMenuDisplayReducer,
        menuOpacity: toggleMenuOpacityReducer,
        artworkList: updateArtworkListReducer,
        windowSize: updateWindowSizeReducer,
        loading: updateLoadingReducer,
        cartDisplay: toggleCartDisplayReducer,
        cartOpacity: toggleCartOpacityReducer,
        loadingOuterBackgroundInFrame:
          updateLoadingOuterBackgroundInFrameReducer,
        loadingVisible: updateLoadingVisibleReducer,
        loadingDisplay: updateLoadingDisplayReducer,
        YOffset: updateYOffsetReducer,
        cursorHover: updateCursorHoverReducer,
        hoverDevice: updateHoverDeviceReducer,
        checkoutUpdating: updateCheckoutUpdatingReducer,
        cartCount: updateCartCountReducer,
        scrollBarWidth: updateScrollBarWidthReducer,
        bodyNoScroll: updateBodyNoScrollReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(component, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
