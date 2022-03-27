export function cartIconClick(
  cartDisplay,
  cartOpacity,
  menuDisplay,
  windowSize,
  toggleMenuDisplay,
  toggleMenuOpacity,
  toggleCartDisplay,
  toggleCartOpacity,
  updateCursorHover,
  addRemoveFixedPositionOnBody
) {
  updateCursorHover(false);
  if (!cartDisplay) {
    if (menuDisplay) {
      toggleMenuOpacity();
      setTimeout(() => {
        updateCursorHover(true);

        setTimeout(() => {
          toggleMenuDisplay();
          toggleCartDisplay();
          addRemoveFixedPositionOnBody("add", windowSize[1]);
          setTimeout(() => {
            toggleCartOpacity();
          }, 10);
        }, 250);
      }, 250);
    } else {
      toggleCartDisplay();
      addRemoveFixedPositionOnBody("add", windowSize[1]);
      setTimeout(() => {
        toggleCartOpacity();
      }, 10);
      setTimeout(() => {
        updateCursorHover(true);
      }, 250);
    }
  } else if (cartDisplay) {
    toggleCartOpacity();
    setTimeout(() => {
      updateCursorHover(true);

      setTimeout(() => {
        toggleCartDisplay();
        addRemoveFixedPositionOnBody("remove", windowSize[1]);
      }, 250);
    }, 250);
  }
}

export function cartClose(
  windowSize,
  toggleCartDisplay,
  toggleCartOpacity,
  updateCursorHover,
  addRemoveFixedPositionOnBody
) {
  updateCursorHover(false);

  toggleCartOpacity();
  setTimeout(() => {
    setTimeout(() => {
      toggleCartDisplay();
      addRemoveFixedPositionOnBody("remove", windowSize[0]);
    }, 250);
  }, 250);
}
