import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import useSetFixedPositionBody from "./useSetFixedPositionBody";

export default function useHandleNavMenuIconClick() {
  const dispatch = useDispatch();

  const windowSize = useSelector((state) => state.windowSize);
  const menuDisplay = useSelector((state) => state.menuDisplay);
  const cartDisplay = useSelector((state) => state.cartDisplay);
  const scrollBarWidth = useSelector((state) => state.scrollBarWidth);
  const {
    toggleMenuDisplay,
    toggleMenuOpacity,
    updateCursorHover,
    toggleCartDisplay,
    toggleCartOpacity,
  } = bindActionCreators(actionCreators, dispatch);
  const { setFixedPositionBody } = useSetFixedPositionBody();

  const handleNavMenuIconClick = () => {
    if (!menuDisplay) {
      console.log("cartDisplay", cartDisplay);
      updateCursorHover(false);
      if (cartDisplay) {
        console.log("cat displaying");
        toggleCartOpacity();
        setTimeout(() => {
          updateCursorHover(true);

          setTimeout(() => {
            toggleCartDisplay();
            toggleMenuDisplay();
            setFixedPositionBody("add", windowSize[1]);
            setTimeout(() => {
              toggleMenuOpacity();
            }, 10);
          }, 250);
        }, 250);
      } else {
        toggleMenuDisplay();
        setFixedPositionBody("add", windowSize[1]);
        console.log("scrollBarWidth", scrollBarWidth);

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
          setFixedPositionBody("remove", windowSize[1]);
        }, 250);
      }, 250);
    }
  };
  return { handleNavMenuIconClick };
}
