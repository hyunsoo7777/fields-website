import React, { useEffect, useRef } from "react";
import Ipad from "../../../assets/ipad.png";
import TALK from "../../../assets/2dtalk.mp4";

import { Mobile, PC } from "../../../utils/MediaQuery";

function TeamIpad() {
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
          className="z-20 left-28 top-48 relative w-[585px] h-[345px]"
          style={{
            backgroundImage: `url(${Ipad})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-[550px] rounded-[8px] top-[20px] left-[18px]"
          >
            <source src={TALK} type="" />
          </video>
        </div>
      </PC>
      <Mobile>
        <div
          className="z-20 w-[230px] h-[138px] mb-[30px] relative"
          style={{
            backgroundImage: `url(${Ipad})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover absolute w-[218px] rounded-[3px] top-[8px] left-[5.5px]"
          >
            <source src={TALK} type="" />
          </video>
        </div>
      </Mobile>
    </>
  );
}

export default TeamIpad;
