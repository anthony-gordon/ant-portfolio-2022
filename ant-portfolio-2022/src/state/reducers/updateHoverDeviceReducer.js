function isTouchDevice() {
  const canHover = window.matchMedia("(hover: hover)").matches;

  return canHover;
}

const reducer = (state = isTouchDevice(), action) => {
  switch (action.type) {
    case "updateHoverDevice":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
