const reducer = (state = false, action) => {
  switch (action.type) {
    case "updateBodyNoScroll":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
