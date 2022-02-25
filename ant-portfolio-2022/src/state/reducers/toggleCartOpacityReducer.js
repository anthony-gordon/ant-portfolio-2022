const reducer = (state = false, action) => {
  switch (action.type) {
    case "toggleCartOpacity":
      return !state;
    default:
      return state;
  }
};

export default reducer;
