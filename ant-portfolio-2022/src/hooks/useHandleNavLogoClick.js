import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import useSetFixedPositionBody from "./useSetFixedPositionBody";

export default function useHandleNavLogoClick() {
  const dispatch = useDispatch();
  const { setFixedPositionBody } = useSetFixedPositionBody();

  let menuDisplay = useSelector((state) => state.menuDisplay, shallowEqual);
  let cartDisplay = useSelector((state) => state.cartDisplay, shallowEqual);
  let windowSize = useSelector((state) => state.windowSize, shallowEqual);
  let scrollBarWidth = useSelector(
    (state) => state.scrollBarWidth,
    shallowEqual
  );

  const {
    toggleMenuDisplay,
    toggleMenuOpacity,
    updateCursorHover,
    toggleCartDisplay,
    toggleCartOpacity,
  } = bindActionCreators(actionCreators, dispatch);
  const handleNavLogoClick = () => {
    updateCursorHover(false);
    if (cartDisplay) {
      toggleCartOpacity();
      setTimeout(() => {
        updateCursorHover(true);
        setTimeout(() => {
          toggleCartDisplay();
          setFixedPositionBody("remove", windowSize[1], scrollBarWidth);
        }, 250);
      }, 250);
    } else if (menuDisplay) {
      toggleMenuOpacity();
      setTimeout(() => {
        updateCursorHover(true);
        setTimeout(() => {
          toggleMenuDisplay();
          setFixedPositionBody("remove", windowSize[1], scrollBarWidth);
        }, 250);
      }, 250);
    } else {
      setTimeout(() => {
        updateCursorHover(true);
      }, 250);
    }
  };
  return { handleNavLogoClick };
}
