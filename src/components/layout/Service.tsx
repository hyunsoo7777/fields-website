import React from "react";
import Title from "../../components/common/Title";
import Text from "../../components/common/Text";
import Knock from "../../assets/knock.svg";
import { Mobile, PC } from "../../utils/MediaQuery";

import ServiceCont from "../include/Service/ServiceCont";
import ServiceSlider from "../include/Service/ServiceSlider";

function Service(props) {
  return (
    <div ref={props.serviceContainerRef}>
      <PC>
        <div className="w-full pt-[200px] pb-[250px] rounded-b-[100px] bg-white flex flex-col items-center">
          <Title
            title="Our service"
            color="text-primary"
            fontSize="text-[100px]"
            fontWeight="font-semibold"
            bottom="mb-[180px]"
          ></Title>
          <div className="flex flex-col items-center">
            {" "}
            <div className="mb-[110px]">
              <img src={Knock} alt="" />
            </div>
            <Text
              color="text-primary"
              title={
                <span>
                  현실감 넘치는 VR환경에서
                  <br />
                  영어 학습을 더욱 재미있게!
                </span>
              }
              fontSize="text-[60px]"
              fontWeight="font-regular"
            ></Text>
            <ServiceCont></ServiceCont>
          </div>
          <ServiceSlider></ServiceSlider>
        </div>
      </PC>
      <Mobile>
        <div
          className="w-full pt-[100px] pb-[100px] bg-white flex flex-col items-center"
          ref={props.serviceContainerRef}
        >
          <Title
            title="Our Service"
            color="text-primary"
            fontSize="text-[35px]"
            fontWeight="font-semibold"
            bottom="mb-[40px]"
          ></Title>
          <div className="flex flex-col items-center">
            {" "}
            <div className="mb-[40px] w-[120px]">
              <img src={Knock} alt="" />
            </div>
            <Text
              color="text-primary"
              title={
                <span>
                  현실감 넘치는 VR환경에서
                  <br />
                  영어 학습을 더욱 재미있게!
                </span>
              }
              fontSize="text-[20px]"
              fontWeight="font-regular"
            ></Text>
            <ServiceCont></ServiceCont>
          </div>
          <ServiceSlider></ServiceSlider>
        </div>
      </Mobile>
    </div>
  );
}

export default Service;
