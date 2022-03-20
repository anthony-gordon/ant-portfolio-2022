const reducer = (state = 0, action) => {
  switch (action.type) {
    case "updateYOffset":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
