const reducer = (state = false, action) => {
  switch (action.type) {
    case "updateCursorHover":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
