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
      <div className="flex items-start gap-[60px]">
        <div className="flex flex-col text-[50px] font-bold items-center relative top-[-15px]">
          <div>2023</div>
          <div className="mt-[172px] mb-[753px]">2022</div>
          <div>2021</div>
        </div>
        <div className="relative">
          <div className="absolute w-[5px] h-[1356px] bg-primary"></div>
          <div className="absolute left-[-16px]">
            <div className="w-[38px] h-[38px] bg-secondary rounded-full"></div>
            <div className="mt-[210px] mb-[790px] w-[38px] h-[38px] bg-secondary rounded-full"></div>
            <div className="w-[38px] h-[38px] bg-secondary rounded-full"></div>
          </div>
        </div>
        <div className="">
          <HistoryFootprint
            date="2023.01"
            title="잠실 본사 이전"
            bottom="mb-[123px]"
          ></HistoryFootprint>
          <HistoryFootprint
            date="2022.11"
            title="특허 출원과정 시작"
            bottom="mb-[60px]"
          ></HistoryFootprint>
          <HistoryFootprint
            date="2022.10"
            title="서울 혁신 챌린지 선정"
            bottom="mb-[60px]"
          ></HistoryFootprint>
          <HistoryFootprint
            date="2022.06"
            title="field S 법인 설립"
            bottom="mb-[60px]"
          ></HistoryFootprint>
          <HistoryFootprint
            date="2022.05"
            title="건국대학교 예비창업패키지 선정"
            bottom="mb-[137px]"
          ></HistoryFootprint>
          <HistoryFootprint
            date="2021.10"
            title="세종대학교 창업경진대회 최우수상"
            bottom="mb-[60px]"
          ></HistoryFootprint>
          <HistoryFootprint
            date="2021.05"
            title="field S 창업"
            bottom="mb-[60px]"
          ></HistoryFootprint>
        </div>
      </div>
    </div>
  );
}

export default History;
