import React from "react";
import { Comment } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="container" style={{
      position: "fixed",
      zIndex:"1000",
    }}>
    <Comment
      visible={true}
      ariaLabel="comment-loading"
      height="300"
      width="300"
      wrapperStyle={{
        position: "fixed",
        zIndex: "999",
        left: "40%",
        top: "30%",
      }}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor="#F4442E"
    />
    </div>
  );
};

export default Loading;
