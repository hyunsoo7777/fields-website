import React from "react";
import { Mobile, PC } from "../../utils/MediaQuery";

function ServiceCont() {
  return (
    <div>
      <PC>
        <div className="flex gap-[60px] mt-[120px] mb-[150px]">
          <div className="w-[200px] h-[200px] rounded-full bg-primary text-white flex justify-center items-center text-center text-[50px]">
            게임
          </div>
          <div className="w-[200px] h-[200px] rounded-full bg-primary text-white flex flex-col justify-center items-center text-center text-[50px] px-[30px]">
            <div className="relative top-[8px]">시뮬</div>
            <div className="relative top-[-8px]">레이션</div>
          </div>
          <div className="w-[200px] h-[200px] rounded-full bg-primary text-white flex justify-center items-center text-center text-[50px]">
            대화
          </div>
        </div>
      </PC>
      <Mobile>
        <div className="flex gap-[20px] my-[40px]">
          <div className="w-[70px] h-[70px] rounded-full bg-primary text-white flex justify-center items-center text-[17px]">
            게임
          </div>
          <div className="w-[70px] h-[70px] rounded-full bg-primary text-white flex flex-col justify-center items-center text-[17px]">
            <div className="relative top-[2px]">시뮬</div>
            <div className="relative top-[-2px]">레이션</div>
          </div>
          <div className="w-[70px] h-[70px] rounded-full bg-primary text-white flex justify-center items-center text-[17px]">
            대화
          </div>
        </div>
      </Mobile>
    </div>
  );
}

export default ServiceCont;
