import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export default function useSetCursorHover() {
  const dispatch = useDispatch();

  const { updateCursorHover } = bindActionCreators(actionCreators, dispatch);
  const setCursorHover = (boolean) => {
    updateCursorHover(boolean);
  };
  return { setCursorHover };
}
