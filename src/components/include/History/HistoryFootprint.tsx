import React from "react";
import { Mobile, PC } from "../../../utils/MediaQuery";
interface FootprintProps {
  date: string;
  title: string;
  bottom: string;
}

function HistoryFootprint(props: FootprintProps) {
  return (
    <div>
      <PC>
        {" "}
        <div className={`${props.bottom}`}>
          <div className="w-[180px] h-[58px] rounded-[30px] bg-history text-[35px] text-primary font-medium flex items-center justify-center">
            {props.date}
          </div>
          <div className="text-[32px] text-primary font-regular ml-[24px] mt-[20px]">
            {props.title}
          </div>
        </div>
      </PC>
      <Mobile>
        {" "}
        <div className={`${props.bottom}`}>
          <div className="w-[61px] h-[18px] rounded-[10px] bg-history text-[12px] text-primary font-medium flex items-center justify-center">
            {props.date}
          </div>
          <div className="text-[14px] text-primary font-regular ml-[8px] mt-[5px]">
            {props.title}
          </div>
        </div>
      </Mobile>
    </div>
  );
}

export default HistoryFootprint;
