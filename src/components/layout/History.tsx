import React from "react";
import Title from "../common/Title";
import HistoryFootprint from "../include/HistoryFootprint";

function History() {
  return (
    <div className="w-full pt-[200px] pb-[250px] bg-background flex flex-col justify-between items-center">
      <Title
        title="History"
        color="text-primary"
        fontSize="text-[100px]"
        fontWeight="font-semibold"
        bottom="mb-[180px]"
      ></Title>
      <div className="flex items-start">
        <div className="flex flex-col text-[50px] font-bold items-center">
          <div>2023</div>
          <div className="mt-[172px] mb-[753px]">2022</div>
          <div>2021</div>
        </div>
        <div className="relative ml-[30px] mr-[31px]">
          <div className="absolute w-[5px] h-[1356px] bg-primary"></div>
          <div className="absolute left-[-16px]">
            <div className="w-[38px] h-[38px] bg-secondary rounded-full"></div>
            <div className="mt-[172px] mb-[753px] w-[38px] h-[38px] bg-secondary rounded-full"></div>
            <div className="w-[38px] h-[38px] bg-secondary rounded-full"></div>
          </div>
        </div>
        <div className="">
          <HistoryFootprint
            date="2023.01"
            title="잠실 본사 이전"
            bottom="mb-[127px]"
          ></HistoryFootprint>
          <HistoryFootprint
            date="2023.01"
            title="잠실 본사 이전"
            bottom="mb-[60px]"
          ></HistoryFootprint>
          <HistoryFootprint
            date="2023.01"
            title="잠실 본사 이전"
            bottom="mb-[60px]"
          ></HistoryFootprint>
          <HistoryFootprint
            date="2023.01"
            title="잠실 본사 이전"
            bottom="mb-[60px]"
          ></HistoryFootprint>
          <HistoryFootprint
            date="2023.01"
            title="잠실 본사 이전"
            bottom="mb-[127px]"
          ></HistoryFootprint>
          <HistoryFootprint
            date="2023.01"
            title="잠실 본사 이전"
            bottom="mb-[60px]"
          ></HistoryFootprint>
          <HistoryFootprint
            date="2023.01"
            title="잠실 본사 이전"
            bottom="mb-[60px]"
          ></HistoryFootprint>
        </div>
      </div>
    </div>
  );
}

export default History;
