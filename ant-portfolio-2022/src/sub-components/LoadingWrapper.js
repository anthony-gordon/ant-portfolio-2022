import React, { useEffect } from "react";
import "./../style/sub-components/LoadingWrapper.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import Loading from "./Loading.js";

function LoadingWrapper() {
  const dispatch = useDispatch();

  const {
    updateLoadingOuterBackgroundInFrame,
    updateLoadingVisible,
    updateLoadingDisplay,
  } = bindActionCreators(actionCreators, dispatch);
  let {
    loading,
    loadingOuterBackgroundInFrame,
    loadingVisible,
    loadingDisplay,
  } = useSelector((state) => state);

  useEffect(() => {
    // if (loading == false) {
    setTimeout(() => {
      updateLoadingOuterBackgroundInFrame(true);
      setTimeout(() => {
        updateLoadingVisible(false);
        setTimeout(() => {
          updateLoadingDisplay(false);
        }, 500);
      }, 500);
      // }
    }, 5000);
  }, [loading]);

  return (
    <div className="LoadingWrapper">
      <Loading
        loadingOuterBackgroundInFrame={loadingOuterBackgroundInFrame}
        loadingVisible={loadingVisible}
        loadingDisplay={loadingDisplay}
      />
    </div>
  );
}

export default LoadingWrapper;
