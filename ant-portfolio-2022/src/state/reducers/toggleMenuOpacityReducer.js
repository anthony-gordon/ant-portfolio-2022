const reducer = (state = false, action) => {
  switch (action.type) {
    case "toggleMenuOpacity":
      return !state;
    default:
      return state;
  }
};

export default reducer;
