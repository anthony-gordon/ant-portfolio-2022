const reducer = (state = {}, action) => {
  switch (action.type) {
    case "updateProduct":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
