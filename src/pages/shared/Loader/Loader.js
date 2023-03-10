import React from "react";
import "@lottiefiles/lottie-player";

const Loader = () => {
  return (
    <div className="w-20 m-auto">
      <lottie-player
        autoplay
        loop
        mode="normal"
        speed="3"
        src="https://assets5.lottiefiles.com/packages/lf20_Q7WY7CfUco.json"
      ></lottie-player>
    </div>
  );
};

export default Loader;
