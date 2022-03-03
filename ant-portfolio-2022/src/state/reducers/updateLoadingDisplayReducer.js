const reducer = (state = true, action) => {
  switch (action.type) {
    case "updateLoadingDisplay":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
