import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";

function ClickLink({ children, className, to }) {
  const dispatch = useDispatch();
  const { updateCursorHover } = bindActionCreators(actionCreators, dispatch);
  return (
    <Link
      onMouseEnter={() => updateCursorHover(true)}
      onMouseLeave={() => updateCursorHover(false)}
      to={to}
      className={className}
    >
      {children}
    </Link>
  );
}

export default ClickLink;
