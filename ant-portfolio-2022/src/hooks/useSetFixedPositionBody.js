import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { settings } from "../context/settings";

const body = document.querySelector("body");

export default function useSetFixedPositionBody() {
  const dispatch = useDispatch();

  const { updateBodyNoScroll } = bindActionCreators(actionCreators, dispatch);
  const windowSize = useSelector((state) => state.windowSize);
  const scrollBarWidth = useSelector((state) => state.scrollBarWidth);

  const setFixedPositionBody = (addOrRemove, windowHeight) => {
    const elements = [
      document.querySelector(".NavBar__wrapper"),
      document.querySelector(".Cart__content-wrapper"),
      document.querySelector(".Cart__footer"),
      document.querySelector(".Homepage"),
    ];
    let vs = body.scrollHeight > windowHeight;

    if (vs && addOrRemove === "add") {
      body.classList.add("body__no-scroll");
      updateBodyNoScroll(true);
      if (windowSize[0] >= 769) {
        elements.forEach((element) => {
          if (element !== null) {
            element.style.maxWidth = `${
              settings.layout.page_max_width + scrollBarWidth
            }px`;
            element.style.paddingRight = `${
              settings.layout.page_desktop_margin + scrollBarWidth
            }px`;
          }
        });
      } else {
        elements.forEach((element) => {
          if (element !== null) {
            element.style.maxWidth = null;
            element.style.paddingRight = `${
              settings.layout.page_margin + scrollBarWidth
            }px`;
          }
        });
      }
    } else if (addOrRemove === "remove") {
      body.classList.remove("body__no-scroll");
      updateBodyNoScroll(false);
      console.log("elements", elements);
      if (windowSize[0] >= 769) {
        elements.forEach((element) => {
          if (element !== null) {
            element.style.maxWidth = `${settings.layout.page_max_width}px`;
            element.style.paddingRight = `${settings.layout.page_desktop_margin}px`;
          }
        });
      } else {
        elements.forEach((element) => {
          if (element !== null) {
            element.style.maxWidth = null;
            element.style.paddingRight = `${settings.layout.page_margin}px`;
          }
        });
      }
    }
  };
  return { setFixedPositionBody };
}
