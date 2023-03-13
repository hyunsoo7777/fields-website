import React from "react";
import { Mobile, PC } from "../../utils/MediaQuery";

function TechPlugin() {
  return (
    <div>
      {" "}
      <PC>
        <div className="w-[1120px] flex gap-[80px] mb-[110px]">
          <div className="w-[320px] h-[320px] rounded-full bg-tech text-center flex justify-center items-center font-semibold text-[50px]">
            메타버스
          </div>
          <div className="w-[320px] h-[320px] rounded-full bg-tech text-center flex justify-center items-center font-semibold text-[50px]">
            3D 게임
          </div>
          <div className="w-[320px] h-[320px] rounded-full bg-tech text-center flex flex-col justify-center items-center font-semibold text-[50px]">
            <div className="relative top-[6px]">VR</div>
            <div className="relative top-[-6px]">어플리케이션</div>
          </div>
        </div>
      </PC>
      <Mobile>
        <div className="w-[430px] flex flex-col gap-[30px] items-center mb-[40px]">
          <div className="w-[126px] h-[126px] rounded-full bg-tech text-center flex justify-center items-center font-semibold text-[20px]">
            메타버스
          </div>
          <div className="w-[126px] h-[126px] rounded-full bg-tech text-center flex justify-center items-center font-semibold text-[20px]">
            3D 게임
          </div>
          <div className="w-[126px] h-[126px] rounded-full bg-tech text-center flex flex-col justify-center items-center font-semibold text-[20px]">
            <div className="relative top-[3px]">VR</div>
            <div className="relative top-[-3px]">어플리케이션</div>
          </div>
        </div>
      </Mobile>
    </div>
  );
}

export default TechPlugin;
