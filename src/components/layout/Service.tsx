import React from "react";
import Title from "../../components/common/Title";
import Text from "../../components/common/Text";
import Knock from "../../assets/knock.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import TECH_img01 from "../../assets/tech_01.png";
import TECH_img02 from "../../assets/tech_02.png";
import TECH_img03 from "../../assets/tech_03.png";

function Service(props) {
  return (
    <div
      className="w-full pt-[200px] pb-[250px] rounded-b-[100px] bg-white flex flex-col items-center"
      ref={props.serviceContainerRef}
    >
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
          title="현실감 넘치는 VR환경에서"
          fontSize="text-[60px]"
          fontWeight="font-regular"
        ></Text>
        <Text
          color="text-primary"
          title="영어 학습을 더욱 재미있게!"
          fontSize="text-[60px]"
          fontWeight="font-regular"
        ></Text>
        <div className="flex gap-[60px] mt-[120px] mb-[150px]">
          <div className="w-[200px] h-[200px] rounded-full bg-primary text-white flex justify-center items-center text-center text-[50px]">
            게임
          </div>
          <div className="w-[200px] h-[200px] rounded-full bg-primary text-white flex flex-col justify-center items-center text-center text-[50px] px-[30px]">
            <div className="relative top-[8px]">시뮬</div>
            <div className="relative top-[-8px]">레이션</div>
          </div>
          <div className="w-[200px] h-[200px] rounded-full bg-primary text-white flex justify-center items-center text-center text-[50px]">
            대화
          </div>
        </div>
      </div>
      <div className="w-screen">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={100}
          slidesPerView={1.5}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          centeredSlides={true}
          loop={true}
          loopedSlides={2}
          autoplay={{
            delay: 2000,
          }}
        >
          <SwiperSlide>
            <div
              className="mb-[300px] w-[900px] h-[500px] rounded-[50px]"
              style={{
                backgroundImage: `url(${TECH_img01})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="mb-[300px] w-[900px] h-[500px] rounded-[50px]"
              style={{
                backgroundImage: `url(${TECH_img02})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="mb-[300px] w-[900px] h-[500px] rounded-[50px]"
              style={{
                backgroundImage: `url(${TECH_img03})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Service;
