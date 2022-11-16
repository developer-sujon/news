import React from "react";
import Loading from "../../assets/images/loading.svg";
const FullscreenLoader = () => {
  return (
    <div className="full-loader">
      <img src={Loading} alt="Loading" />
    </div>
  );
};

export default FullscreenLoader;
