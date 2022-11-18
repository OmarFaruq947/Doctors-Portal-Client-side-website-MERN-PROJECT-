import React from "react";

const Loading = () => {
  return (
    <>
      <progress className="absolute inset-[40%] progress w-28  bg-gradient-to-r from-secondary to-primary"></progress>
    </>
  );
};

export default Loading;
