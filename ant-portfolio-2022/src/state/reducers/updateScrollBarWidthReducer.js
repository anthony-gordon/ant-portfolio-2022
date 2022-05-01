const reducer = (state = 0, action) => {
  switch (action.type) {
    case "updateScrollBarWidth":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
