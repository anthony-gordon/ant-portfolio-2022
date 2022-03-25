const reducer = (state = false, action) => {
  switch (action.type) {
    case "updateCheckoutUpdating":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
