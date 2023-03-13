import React from "react";
import { Mobile, PC } from "../../utils/MediaQuery";
import FACE from "../../assets/face.jpg";
import TURN from "../../assets/turn.mp4";

function TechRotation() {
  return (
    <div>
      <PC>
        <div className="w-[1040px] flex gap-[120px] place-items-center justify-center mt-[150px]">
          <div
            className="bg-primary w-[360px] h-[460px] rounded-[30px] text-white text-[40px] flex justify-center items-center"
            style={{
              backgroundImage: `url(${FACE})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="bg-primary w-[480px] h-[740px] rounded-[30px] text-white text-[40px] flex justify-center items-center overflow-hidden">
            <video
              controls={false}
              autoPlay
              loop
              muted
              className="object-cover w-full h-full"
            >
              <source src={TURN} type="video/mp4" />
            </video>
          </div>
        </div>
      </PC>
      <Mobile>
        <div className="w-[430px] flex flex-col gap-[40px] place-items-center justify-center mt-[50px]">
          <div
            className="bg-primary w-[180px] h-[230px] rounded-[20px] text-white flex justify-center items-center"
            style={{
              backgroundImage: `url(${FACE})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="bg-primary w-[240px] h-[290px] rounded-[20px] text-white flex justify-center items-center overflow-hidden">
            <video
              controls={false}
              autoPlay
              loop
              muted
              className="object-cover w-full h-full"
            >
              <source src={TURN} type="video/mp4" />
            </video>
          </div>
        </div>
      </Mobile>
    </div>
  );
}

export default TechRotation;
