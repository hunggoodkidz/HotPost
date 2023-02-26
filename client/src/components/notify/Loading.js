import React from "react";
import { Audio } from "react-loader-spinner";

const Loading = () => {
  return (
    <Audio
      height="1000"
      width="1000"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
};

export default Loading;
