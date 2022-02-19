const reducer = (state = false, action) => {
  switch (action.type) {
    case "updateLoading":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
