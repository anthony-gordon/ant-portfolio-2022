const reducer = (state = [], action) => {
  switch (action.type) {
    case "updateClient":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
