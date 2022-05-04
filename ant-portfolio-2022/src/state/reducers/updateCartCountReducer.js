const reducer = (state = 0, action) => {
  switch (action.type) {
    case "updateCartCount":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
