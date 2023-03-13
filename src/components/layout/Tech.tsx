import React from "react";
import Title from "../common/Title";
import Text from "../common/Text";

import { Mobile, PC } from "../../utils/MediaQuery";
import TechPlugin from "../include/TechPlugin";
import TechRotation from "../include/TechRotation";
import TechRealtime from "../include/TechRealtime";
import TechCompare from "../include/TechCompare";

function Tech(props) {
  return (
    <div>
      <PC>
        <div ref={props.techContainerRef}>
          <section className="w-screen pt-[200px] pb-[250px] bg-background flex flex-col items-center justify-between">
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
            <TechPlugin></TechPlugin>
            <Text
              color="text-primary"
              title={
                <span>
                  메타버스, 3D게임, VR 어플리케이션 등
                  <br />
                  3D 콘텐츠나 서비스에 인공지능을 쉽게 접목할 수 있게 만드는
                  <br />
                  3D-AI 플러그인 소프트웨어를 만들고 있습니다.
                </span>
              }
              fontSize="text-[30px]"
              fontWeight="font-regular"
            ></Text>
          </section>
          <section className="w-screen pt-[200px] pb-[250px]  bg-white flex flex-col items-center justify-between">
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
            <TechRotation></TechRotation>
          </section>
          <section className="w-screen pt-[200px] pb-[250px] bg-background flex flex-col items-center justify-between">
            <Title
              title={
                <span>
                  <span className="font-semibold text-[90px]">음성</span>에 따라
                  <span className="font-semibold text-[90px]"> 실시간</span>으로
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
            <TechRealtime></TechRealtime>
            <TechCompare></TechCompare>
          </section>
        </div>
      </PC>
      <Mobile>
        <section className="w-screen pt-[100px] pb-[100px] bg-background flex flex-col items-center justify-between">
          <Title
            title="Technology"
            color="text-primary"
            fontSize="text-[35px]"
            fontWeight="font-semibold"
            bottom="mb-[20px]"
          ></Title>
          <Title
            title="3D-AI 플러그인 소프트웨어"
            color="text-primary"
            fontSize="text-[20px]"
            fontWeight="font-semibold"
            bottom="mb-[40px]"
          ></Title>
          <TechPlugin></TechPlugin>
          <Text
            color="text-primary"
            title={
              <span>
                메타버스, 3D게임, VR 어플리케이션 등
                <br />
                3D 콘텐츠나 서비스에 인공지능을 쉽게
                <br />
                접목할 수 있게 만드는 3D-AI 플러그인
                <br />
                소프트웨어를 만들고 있습니다.
              </span>
            }
            fontSize="text-[16px]"
            fontWeight="font-regular"
          ></Text>
        </section>
        <section className="w-screen pt-[100px] pb-[100px]  bg-white flex flex-col items-center justify-between">
          <Title
            title="2D to 3D"
            color="text-primary"
            fontSize="text-[35px]"
            fontWeight="font-semibold"
            bottom="mb-[30px]"
          ></Title>
          <Text
            color="text-primary"
            title={
              <span>
                2D 얼굴 이미지를 넣어
                <br />
                3D 캐릭터로 변환
              </span>
            }
            fontSize="text-[20px]"
            fontWeight="font-regular"
          ></Text>
          <TechRotation></TechRotation>
        </section>
        <section className="w-screen pt-[100px] pb-[100px] bg-background flex flex-col items-center justify-between">
          <Title
            title={
              <span>
                <span className="font-semibold text-[40px]">음성</span>에 따라
                <span className="font-semibold text-[40px]"> 실시간</span>으로
              </span>
            }
            color="text-primary"
            fontSize="text-[18px]"
            fontWeight="font-regular"
          ></Title>
          <Title
            title={
              <span>
                캐릭터의{" "}
                <span className="font-semibold text-[40px]">얼굴 표현</span>
              </span>
            }
            color="text-primary"
            fontSize="text-[18px]"
            fontWeight="font-regular"
            bottom="mb-[50px]"
          ></Title>
          <TechRealtime></TechRealtime>
          <TechCompare></TechCompare>
        </section>
      </Mobile>
    </div>
  );
}

export default Tech;
