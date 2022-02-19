const reducer = (state = false, action) => {
  switch (action.type) {
    case "isCartOpen":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
