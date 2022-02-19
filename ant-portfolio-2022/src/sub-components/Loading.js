import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./../style/sub-components/Loading.css";

function Loading() {
  return (
    <div className="Loading">
      <CircularProgress />
    </div>
  );
}

export default Loading;
