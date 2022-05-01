import { render, screen } from "@testing-library/react";
import NavMenu from "../components/NavMenu";
import { Provider } from "react-redux";
import reducers from "./../state/reducers/index";
import { createStore } from "redux";

const initalState = {
  menuDisplay: false,
  menuOpacity: false,
  artworkList: [],
  windowSize: [0, 0],
  loading: true,
  cartDisplay: false,
  cartOpacity: false,
  loadingOuterBackgroundInFrame: false,
  loadingVisible: true,
  loadingDisplay: true,
  YOffset: 0,
  cursorHover: false,
  hoverDevice: true,
  checkoutUpdating: false,
  cartCount: 0,
  scrollBarWidth: 0,
  bodyNoScroll: false,
};

const store = createStore(reducers, initalState);

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

test("Nav menu is present", () => {
  render(<NavMenu />, { wrapper: Wrapper });
  screen.debug();
});
