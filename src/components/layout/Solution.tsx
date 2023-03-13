import React from "react";
import Title from "../common/Title";
import Imac from "../../assets/imac.png";
import Iphone from "../../assets/iPhone.png";
import { Mobile, PC } from "../../utils/MediaQuery";

function Solution() {
  return (
    <div>
      <PC>
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
      </PC>
      <Mobile>
        <div className="w-full pt-[100px]  bg-background flex flex-col justify-between items-center">
          <Title
            title="웹/앱 제작 솔루션"
            color="text-primary"
            fontSize="text-[35px]"
            fontWeight="font-semibold"
            bottom="mb-[40px]"
          ></Title>
          <div className="w-[430px] flex flex-col items-center justify-center">
            <div className="relative z-10 w-[260px]">
              <img src={Imac} alt="" />
            </div>
            <div className="relative z-20 top-[-130px] left-[100px] w-[84px]">
              <img src={Iphone} alt="" />
            </div>
          </div>
        </div>
      </Mobile>
    </div>
  );
}

export default Solution;
