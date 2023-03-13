import React, { useEffect, useRef } from "react";
import Imac from "../../../assets/imac.png";
import TALKING from "../../../assets/talking.mp4";
import { Mobile, PC } from "../../../utils/MediaQuery";

function TeamImac() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // 자동재생을 위해서는 muted가 필요합니다.
      videoRef.current.autoplay = true; // 자동재생 설정
      videoRef.current.load();
    }
  }, [videoRef]);

  return (
    <>
      <PC>
        <div
          className="z-10 right-24 relative w-[845px] h-[712px] bg-imac"
          style={{
            backgroundImage: `url(${Imac})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <video
            ref={videoRef}
            controls={false}
            autoPlay
            loop
            muted
            playsInline
            className="absolute"
          >
            <source src={TALKING} type="video/mp4" />
          </video>
        </div>
      </PC>
      <Mobile>
        <div
          className="z-10 w-[250px] h-[218px] relative"
          style={{
            backgroundImage: `url(${Imac})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <video
            ref={videoRef}
            controls={false}
            autoPlay
            loop
            muted
            playsInline
            className="absolute"
          >
            <source src={TALKING} type="video/mp4" />
          </video>
        </div>
      </Mobile>
    </>
  );
}

export default TeamImac;
