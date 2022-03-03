export const toggleMenuDisplay = (data) => {
  return (dispatch) => {
    dispatch({
      type: "toggleMenuDisplay",
      payload: data,
    });
  };
};

export const toggleMenuOpacity = (data) => {
  return (dispatch) => {
    dispatch({
      type: "toggleMenuOpacity",
      payload: data,
    });
  };
};

export const updateArtworkList = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateArtworkList",
      payload: data,
    });
  };
};

export const updateWindowSize = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateWindowSize",
      payload: data,
    });
  };
};

export const updateLoading = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateLoading",
      payload: data,
    });
  };
};

export const updateProduct = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateProduct",
      payload: data,
    });
  };
};

export const updateProducts = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateProducts",
      payload: data,
    });
  };
};

export const updateCheckout = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateCheckout",
      payload: data,
    });
  };
};

export const toggleCartOpacity = (data) => {
  return (dispatch) => {
    dispatch({
      type: "toggleCartOpacity",
      payload: data,
    });
  };
};

export const toggleCartDisplay = (data) => {
  return (dispatch) => {
    dispatch({
      type: "toggleCartDisplay",
      payload: data,
    });
  };
};

export const updateLoadingDisplay = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateLoadingDisplay",
      payload: data,
    });
  };
};

export const updateLoadingVisible = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateLoadingVisible",
      payload: data,
    });
  };
};

export const updateLoadingOuterBackgroundInFrame = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateLoadingOuterBackgroundInFrame",
      payload: data,
    });
  };
};
