import React from "react";
import Title from "../common/Title";
import Text from "../common/Text";

function About(props) {
  return (
    <div
      className="w-full pt-[200px] pb-[250px] bg-primary flex flex-col justify-between items-center z-30"
      ref={props.aboutContainerRef}
    >
      <div className="w-[1040px] flex flex-col items-center">
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
      </div>
      <div className="w-[1040px] flex flex-col items-center mt-[183px]">
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
      </div>
    </div>
  );
}

export default About;
