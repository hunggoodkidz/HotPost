import React from "react";
import { Comment } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      className="position-fixed w-100 h-100 text-center loading"
      style={{
        background: "#0008",
        color: "white",
        top: 0,
        left: 0,
        zIndex: 50,
      }}
    >
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
        Loading
      />
    </div>
  );
};

export default Loading;
