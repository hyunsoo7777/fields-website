import React from "react";
import Title from "../common/Title";
import Text from "../common/Text";
import { Mobile, PC } from "../../utils/MediaQuery";
import AboutCont from "../include/About/AboutCont";

function About(props) {
  return (
    <div ref={props.aboutContainerRef}>
      <PC>
        <div className="w-screen pt-[200px] pb-[250px] bg-primary flex flex-col justify-between items-center relative z-40">
          <AboutCont width="1040px">
            <Title
              title="About us"
              color="text-white"
              fontSize="text-[100px]"
              fontWeight="font-semibold"
              bottom="mb-[30px]"
            ></Title>
            <Text
              color="text-white"
              title="field S는 인공지능 기술을 통한"
              fontSize="text-[34px]"
              fontWeight="font-regular"
            ></Text>
            <Text
              color="text-white"
              title="3D 컨텐츠 산업의 발전에 기여하고 있습니다."
              fontSize="text-[34px]"
              fontWeight="font-regular"
            ></Text>
          </AboutCont>
          <AboutCont width="1040px" top="120px">
            <Title
              title="Our Mission"
              color="text-white"
              fontSize="text-[70px]"
              fontWeight="font-semibold"
              bottom="pb-[30px]"
            ></Title>
            <Text
              color="text-white"
              title="시공간의 제약 없이, 언어의 경계를 넘어"
              fontSize="text-[34px]"
              fontWeight="font-regular"
            ></Text>
            <Text
              color="text-white"
              title="실시간 소통이 가능한 세상"
              fontSize="text-[34px]"
              fontWeight="font-regular"
            ></Text>
          </AboutCont>
        </div>
      </PC>
      <Mobile>
        <div
          className="w-full pt-[100px] pb-[100px] bg-primary flex flex-col justify-between items-center z-30"
          ref={props.aboutContainerRef}
        >
          <AboutCont width="430px">
            <Title
              title="About us"
              color="text-white"
              fontSize="text-[35px]"
              fontWeight="font-semibold"
              bottom="mb-[30px]"
            ></Title>
            <Text
              color="text-white"
              title={
                <span>
                  field S는 인공지능 기술을 통한
                  <br />
                  3D 컨텐츠 산업의 발전에
                  <br />
                  기여하고 있습니다.
                </span>
              }
              fontSize="text-[18px]"
              fontWeight="font-regular"
            ></Text>
          </AboutCont>
          <AboutCont width="430px" top="80px">
            <Title
              title="Our Mission"
              color="text-white"
              fontSize="text-[30px]"
              fontWeight="font-semibold"
              bottom="pb-[30px]"
            ></Title>
            <Text
              color="text-white"
              title={
                <span>
                  시공간의 제약 없이, 언어의 경계를
                  <br />
                  넘어 실시간 소통이 가능한 세상
                </span>
              }
              fontSize="text-[18px]"
              fontWeight="font-regular"
            ></Text>
          </AboutCont>
        </div>
      </Mobile>
    </div>
  );
}

export default About;
