const reducer = (state = {}, action) => {
  switch (action.type) {
    case "updateCheckout":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
