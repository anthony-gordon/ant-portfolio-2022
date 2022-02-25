const reducer = (state = false, action) => {
  switch (action.type) {
    case "toggleCartDisplay":
      return !state;
    default:
      return state;
  }
};

export default reducer;
