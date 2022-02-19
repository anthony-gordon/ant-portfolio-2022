const reducer = (state = false, action) => {
  switch (action.type) {
    case "toggleMenuDisplay":
      return !state;
    default:
      return state;
  }
};

export default reducer;
