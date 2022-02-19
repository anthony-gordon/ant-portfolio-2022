const reducer = (state = [], action) => {
  switch (action.type) {
    case "updateArtworkList":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
