import React from "react";
import banner from "./../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="w-[90%] mx-auto h-64 mt-6 ">
      <img src={banner} className="h-full object-fill w-full rounded-lg" />
    </div>
  );
};

export default Banner;
