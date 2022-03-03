const reducer = (state = true, action) => {
  switch (action.type) {
    case "updateLoadingVisible":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
