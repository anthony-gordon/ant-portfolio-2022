const reducer = (state = false, action) => {
  switch (action.type) {
    case "updateLoadingOuterBackgroundInFrame":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
