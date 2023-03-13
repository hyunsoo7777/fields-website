import React from "react";
import Title from "../common/Title";
import HistoryFootprint from "../include/HistoryFootprint";
import { Mobile, PC } from "../../utils/MediaQuery";

function History() {
  return (
    <div>
      <PC>
        <div className="w-screen pt-[200px] pb-[250px] bg-background flex flex-col justify-between items-center">
          <Title
            title="History"
            color="text-primary"
            fontSize="text-[100px]"
            fontWeight="font-semibold"
            bottom="mb-[150px]"
          ></Title>
          <div className="w-[1040px] justify-center flex gap-[60px] pl-[60px]">
            <div className="flex flex-col text-[50px] font-bold items-center relative top-[-20px]">
              <div>2023</div>
              <div className="mt-[172px] mb-[678px]">2022</div>
              <div>2021</div>
            </div>
            <div className="relative top-[-2px]">
              <div className="absolute w-[5px] h-[1356px] bg-primary"></div>
              <div className="absolute left-[-16px]">
                <div className="w-[38px] h-[38px] bg-secondary rounded-full"></div>
                <div className="mt-[210px] mb-[715px] w-[38px] h-[38px] bg-secondary rounded-full"></div>
                <div className="w-[38px] h-[38px] bg-secondary rounded-full"></div>
              </div>
            </div>
            <div className="relative top-[-2px]">
              <HistoryFootprint
                date="2023.01"
                title="잠실 본사 이전"
                bottom="mb-[121px]"
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
                bottom="mb-[60px]"
              ></HistoryFootprint>
              <HistoryFootprint
                date="2021.10"
                title="세종대학교 창업경진대회 최우수상"
                bottom="mb-[60px]"
              ></HistoryFootprint>
              <HistoryFootprint
                date="2021.05"
                title="field S 창업"
                bottom="mb-[20px]"
              ></HistoryFootprint>
            </div>
          </div>
        </div>
      </PC>
      <Mobile>
        <div className="w-screen pt-[100px] pb-[100px] bg-background flex flex-col justify-between items-center">
          <Title
            title="History"
            color="text-primary"
            fontSize="text-[35px]"
            fontWeight="font-semibold"
            bottom="mb-[40px]"
          ></Title>
          <div className="flex items-start gap-[40px]">
            <div className="flex flex-col text-[18px] font-bold items-center relative top-[-5px]">
              <div>2023</div>
              <div className="mt-[61px] mb-[274px]">2022</div>
              <div>2021</div>
            </div>
            <div className="relative top-[1px]">
              <div className="absolute w-[1.8px] h-[492px] bg-primary"></div>
              <div className="absolute left-[-6px]">
                <div className="w-[14px] h-[14px] bg-secondary rounded-full"></div>
                <div className="mt-[75px] mb-[287px] w-[14px] h-[14px] bg-secondary rounded-full"></div>
                <div className="w-[14px] h-[14px] bg-secondary rounded-full"></div>
              </div>
            </div>
            <div className="">
              <HistoryFootprint
                date="2023.01"
                title="잠실 본사 이전"
                bottom="mb-[45px]"
              ></HistoryFootprint>
              <HistoryFootprint
                date="2022.11"
                title="특허 출원과정 시작"
                bottom="mb-[20px]"
              ></HistoryFootprint>
              <HistoryFootprint
                date="2022.10"
                title="서울 혁신 챌린지 선정"
                bottom="mb-[20px]"
              ></HistoryFootprint>
              <HistoryFootprint
                date="2022.06"
                title="field S 법인 설립"
                bottom="mb-[20px]"
              ></HistoryFootprint>
              <HistoryFootprint
                date="2022.05"
                title="건국대학교 예비창업패키지 선정"
                bottom="mb-[65px]"
              ></HistoryFootprint>
              <HistoryFootprint
                date="2021.10"
                title="세종대학교 창업경진대회 최우수상"
                bottom="mb-[20px]"
              ></HistoryFootprint>
              <HistoryFootprint
                date="2021.05"
                title="field S 창업"
                bottom="mb-[20px]"
              ></HistoryFootprint>
            </div>
          </div>
        </div>
      </Mobile>
    </div>
  );
}

export default History;
