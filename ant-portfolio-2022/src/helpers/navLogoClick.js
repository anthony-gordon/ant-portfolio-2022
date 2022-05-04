export function navLogoClick(
  menuDisplay,
  cartDisplay,
  windowSize,
  toggleMenuDisplay,
  toggleMenuOpacity,
  toggleCartOpacity,
  toggleCartDisplay,
  updateCursorHover,
  addRemoveFixedPositionOnBody
) {
  updateCursorHover(false);

  if (cartDisplay) {
    toggleCartOpacity();
    setTimeout(() => {
      updateCursorHover(true);
      setTimeout(() => {
        toggleCartDisplay();
        addRemoveFixedPositionOnBody("remove", windowSize[1]);
      }, 250);
    }, 250);
  } else if (menuDisplay) {
    toggleMenuOpacity();
    setTimeout(() => {
      updateCursorHover(true);
      setTimeout(() => {
        toggleMenuDisplay();
        addRemoveFixedPositionOnBody("remove", windowSize[1]);
      }, 250);
    }, 250);
  } else {
    setTimeout(() => {
      updateCursorHover(true);
    }, 250);
  }
}
