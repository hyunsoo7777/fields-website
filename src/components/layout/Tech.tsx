import React from "react";
import Title from "../common/Title";
import Text from "../common/Text";
import Ipad from "../../assets/ipad.png";
import Imac from "../../assets/imac.png";

function Tech(props) {
  return (
    <div ref={props.techContainerRef}>
      <section className="w-full pt-[200px] pb-[250px] bg-background flex flex-col items-center justify-between">
        <Title
          title="Technology"
          color="text-primary"
          fontSize="text-[100px]"
          fontWeight="font-semibold"
          bottom="mb-[180px]"
        ></Title>
        <Title
          title="3D-AI 플러그인 소프트웨어"
          color="text-primary"
          fontSize="text-[70px]"
          fontWeight="font-semibold"
          bottom="mb-[150px]"
        ></Title>
        <div className="w-[1120px] flex gap-[80px] mb-[110px]">
          <div className="w-[320px] h-[320px] rounded-full bg-tech text-center flex justify-center items-center font-semibold text-[50px]">
            메타버스
          </div>
          <div className="w-[320px] h-[320px] rounded-full bg-tech text-center flex justify-center items-center font-semibold text-[50px]">
            3D 게임
          </div>
          <div className="w-[320px] h-[320px] rounded-full bg-tech text-center flex justify-center items-center font-semibold text-[50px]">
            VR <br />
            어플리케이션
          </div>
        </div>
        <Text
          color="text-primary"
          title="메타버스, 3D게임, VR 어플리케이션 등"
          fontSize="text-[30px]"
          fontWeight="font-regular"
        ></Text>
        <Text
          color="text-primary"
          title="3D 콘텐츠나 서비스에 인공지능을 쉽게 접목할 수 있게 만드는"
          fontSize="text-[30px]"
          fontWeight="font-regular"
        ></Text>
        <Text
          color="text-primary"
          title="3D-AI 플러그인 소프트웨어를 만들고 있습니다."
          fontSize="text-[30px]"
          fontWeight="font-regular"
        ></Text>
      </section>
      <section className="w-full pt-[200px] pb-[250px]  bg-white flex flex-col items-center justify-between">
        <Title
          title="2D to 3D"
          color="text-primary"
          fontSize="text-[100px]"
          fontWeight="font-semibold"
          bottom="mb-[30px]"
        ></Title>
        <Text
          color="text-primary"
          title="2D 얼굴 이미지를 넣어 3D 캐릭터로 변환"
          fontSize="text-[30px]"
          fontWeight="font-regular"
        ></Text>
        <div className="w-[1040px] flex gap-[120px] place-items-center justify-center mt-[150px]">
          <div className="bg-primary w-[360px] h-[460px] rounded-[30px] text-white text-[40px] flex justify-center items-center">
            대표님 얼굴 사진
          </div>
          <div className="bg-primary w-[560px] h-[880px] rounded-[30px] text-white text-[40px] flex justify-center items-center">
            얼굴 360도 로테이션
          </div>
        </div>
      </section>
      <section className="w-full pt-[200px] pb-[250px] bg-background flex flex-col items-center justify-between">
        <Title
          title={
            <span>
              <span className="font-semibold text-[90px]">음성</span>에 따라
              <span className="font-semibold text-[90px]">실시간</span>으로
            </span>
          }
          color="text-primary"
          fontSize="text-[60px]"
          fontWeight="font-regular"
        ></Title>
        <Title
          title={
            <span>
              캐릭터의{" "}
              <span className="font-semibold text-[90px]">얼굴 표현</span>
            </span>
          }
          color="text-primary"
          fontSize="text-[60px]"
          fontWeight="font-regular"
          bottom="mb-[200px]"
        ></Title>
        <div className="flex place-items-center justify-center mt-[150px] relative">
          <div className="z-20 left-24 top-48 relative">
            {" "}
            <img src={Ipad} alt="" />
          </div>
          <div className="z-10 right-24 relative">
            <img src={Imac} alt="" />
          </div>
        </div>
        <div className="w-[1040px] flex items-center justify-center gap-[130px] mt-[250px]">
          <div className="flex flex-col items-center gap-[90px] W-fit">
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
            <p className="text-[30px] font-medium text-center">
              <div>인공지능(AI)를 활용</div>
              <div className="w-max">
                <span className="text-secondary">단어</span>와{" "}
                <span className="text-secondary">감정</span>에 따라{" "}
                <span className="text-secondary">얼굴 표현 가능</span>
              </div>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tech;
