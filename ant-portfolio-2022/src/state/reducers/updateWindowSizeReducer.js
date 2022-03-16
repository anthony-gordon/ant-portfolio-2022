const reducer = (state = [window.innerWidth, window.innerHeight], action) => {
  switch (action.type) {
    case "updateWindowSize":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
