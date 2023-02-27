import React from "react";
interface FootprintProps {
  date: string;
  title: string;
  bottom: string;
}

function HistoryFootprint(props: FootprintProps) {
  return (
    <div className={`$ ${props.bottom}`}>
      <div className="w-[180px] h-[58px] rounded-[30px] bg-history text-[35px] text-primary font-medium flex items-center justify-center">
        {props.date}
      </div>
      <div className="text-[32px] text-primary font-regular ml-[25px] mt-[20px]">
        {props.title}
      </div>
    </div>
  );
}

export default HistoryFootprint;
