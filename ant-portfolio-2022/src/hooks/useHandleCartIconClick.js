import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import useSetFixedPositionBody from "./useSetFixedPositionBody";

export default function useHandleCartIconClick() {
  const dispatch = useDispatch();
  const { setFixedPositionBody } = useSetFixedPositionBody();

  let menuDisplay = useSelector((state) => state.menuDisplay, shallowEqual);
  let cartDisplay = useSelector((state) => state.cartDisplay, shallowEqual);
  let windowSize = useSelector((state) => state.windowSize, shallowEqual);

  const {
    toggleMenuDisplay,
    toggleMenuOpacity,
    updateCursorHover,
    toggleCartDisplay,
    toggleCartOpacity,
  } = bindActionCreators(actionCreators, dispatch);
  const handleCartIconClick = () => {
    updateCursorHover(false);
    if (!cartDisplay) {
      if (menuDisplay) {
        toggleMenuOpacity();
        setTimeout(() => {
          updateCursorHover(true);

          setTimeout(() => {
            toggleMenuDisplay();
            toggleCartDisplay();
            setFixedPositionBody("add", windowSize[1]);
            setTimeout(() => {
              toggleCartOpacity();
            }, 10);
          }, 250);
        }, 250);
      } else {
        toggleCartDisplay();
        setFixedPositionBody("add", windowSize[1]);
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
          setFixedPositionBody("remove", windowSize[1]);
        }, 250);
      }, 250);
    }
  };
  return { handleCartIconClick };
}
