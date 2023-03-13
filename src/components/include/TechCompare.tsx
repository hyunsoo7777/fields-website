import React from "react";
import { Mobile, PC } from "../../utils/MediaQuery";

function TechCompare() {
  return (
    <div>
      <PC>
        <div className="w-[1040px] flex items-center justify-center gap-[130px] mt-[250px]">
          <div className="flex flex-col items-center gap-[90px] w-fit">
            <div className="w-[320px] h-[320px] rounded-full bg-primary text-[58px] flex items-center justify-center text-white">
              기존서비스
            </div>
            <div className="text-[30px] font-medium text-center">
              음성이 들어가도
              <br />
              캐릭터의 얼굴 변화 X
            </div>
          </div>
          <div className="text-[50px] font-semibold relative top-[-90px]">
            VS
          </div>
          <div className="flex flex-col items-center gap-[90px] W-fit">
            <div className="w-[320px] h-[320px] rounded-full bg-secondary text-[64px] flex items-center justify-center text-white">
              field S
            </div>
            <div className="text-[30px] font-medium text-center">
              <div>인공지능(AI)를 활용</div>
              <div className="w-max">
                <span className="text-secondary">단어</span>와{" "}
                <span className="text-secondary">감정</span>에 따라{" "}
                <span className="text-secondary">얼굴 표현 가능</span>
              </div>
            </div>
          </div>
        </div>
      </PC>
      <Mobile>
        <div className="w-[430px] flex flex-col items-center justify-center gap-[25px] mt-[80px]">
          <div className="flex flex-col items-center gap-[20px] w-fit">
            <div className="w-[165px] h-[165px] rounded-full bg-primary text-[33px] flex items-center justify-center text-white">
              기존서비스
            </div>
            <div className="text-[16px] font-medium text-center">
              음성이 들어가도
              <br />
              캐릭터의 얼굴 변화 X
            </div>
          </div>
          <div className="text-[50px] font-semibold relative">VS</div>
          <div className="flex flex-col items-center gap-[20px] W-fit">
            <div className="w-[165px] h-[165px] rounded-full bg-secondary text-[33px] flex items-center justify-center text-white">
              field S
            </div>
            <div className="text-[16px] font-medium text-center">
              <div>인공지능(AI)를 활용</div>
              <div className="w-max">
                <span className="text-secondary">단어</span>와{" "}
                <span className="text-secondary">감정</span>에 따라{" "}
                <span className="text-secondary">얼굴 표현 가능</span>
              </div>
            </div>
          </div>
        </div>
      </Mobile>
    </div>
  );
}

export default TechCompare;
