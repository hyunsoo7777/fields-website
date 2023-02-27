import React from "react";
import Title from "../common/Title";
import Imac from "../../assets/imac.png";
import Iphone from "../../assets/iPhone.png";

function Solution() {
  return (
    <div className="w-full pt-[200px] pb-[250px] bg-background flex flex-col justify-between items-center">
      <Title
        title="웹/앱 제작 솔루션"
        color="text-primary"
        fontSize="text-[100px]"
        fontWeight="font-semibold"
        bottom="mb-[150px]"
      ></Title>
      <div className="flex items-center justify-center">
        <div className="relative z-10 left-36">
          <img src={Imac} alt="" />
        </div>
        <div className="relative z-20 right-24 top-28">
          <img src={Iphone} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Solution;
