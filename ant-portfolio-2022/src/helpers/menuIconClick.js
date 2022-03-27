export function menuIconClick(
  menuDisplay,
  cartDisplay,
  windowSize,
  toggleMenuDisplay,
  toggleMenuOpacity,
  updateCursorHover,
  toggleCartDisplay,
  toggleCartOpacity,
  addRemoveFixedPositionOnBody
) {
  if (!menuDisplay) {
    console.log(cartDisplay);

    updateCursorHover(false);
    if (cartDisplay) {
      console.log("cart display");
      toggleCartOpacity();
      setTimeout(() => {
        updateCursorHover(true);

        setTimeout(() => {
          toggleCartDisplay();
          toggleMenuDisplay();
          addRemoveFixedPositionOnBody("add", windowSize[1]);

          setTimeout(() => {
            toggleMenuOpacity();
          }, 10);
        }, 250);
      }, 250);
    } else {
      toggleMenuDisplay();
      addRemoveFixedPositionOnBody("add", windowSize[1]);

      setTimeout(() => {
        toggleMenuOpacity();
        setTimeout(() => {
          updateCursorHover(true);
        }, 250);
      }, 10);
    }
  } else if (menuDisplay) {
    updateCursorHover(false);
    toggleMenuOpacity();
    setTimeout(() => {
      updateCursorHover(true);
      setTimeout(() => {
        toggleMenuDisplay();
        addRemoveFixedPositionOnBody("remove", windowSize[1]);
      }, 250);
    }, 250);
  }
}
