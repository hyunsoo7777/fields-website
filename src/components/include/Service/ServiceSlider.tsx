import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Mobile, PC } from "../../../utils/MediaQuery";
import TECH_img01 from "../../../assets/slider_01.png";
import TECH_img02 from "../../../assets/slider_02.png";
import TECH_img03 from "../../../assets/slider_03.png";

import "swiper/css";
import "swiper/css/pagination";

function ServiceSlider() {
  return (
    <div className="w-screen">
      <PC>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={100}
          slidesPerView={1.5}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          centeredSlides={true}
          autoplay={{ delay: 2000 }}
          loop={true}
        >
          <SwiperSlide>
            <div
              className="mb-[300px] w-[900px] h-[500px] rounded-[50px]"
              style={{
                backgroundImage: `url(${TECH_img01})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100%",
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
                backgroundSize: "100%",
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
                backgroundSize: "100%",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </PC>
      <Mobile>
        <div className="w-screen">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.5}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            centeredSlides={true}
            loop={true}
            loopedSlides={1}
            autoplay={{
              delay: 2000,
            }}
          >
            <SwiperSlide>
              <div
                className="mb-[145px] w-[200px] h-[280px] rounded-[16px]"
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
                className="mb-[145px] w-[200px] h-[280px] rounded-[16px]"
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
                className="mb-[145px] w-[200px] h-[280px] rounded-[16px]"
                style={{
                  backgroundImage: `url(${TECH_img03})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "70% 50%",
                  backgroundSize: "cover",
                }}
              ></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Mobile>
    </div>
  );
}

export default ServiceSlider;
