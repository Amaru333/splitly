import React from "react";
import Lottie from "react-lottie";

function UILottiePlayer({ animation }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} />;
}

export default UILottiePlayer;
