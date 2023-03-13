import React from "react";
import { Mobile, PC } from "../../utils/MediaQuery";
import Ipad from "../../assets/ipad.png";
import Imac from "../../assets/imac.png";
import TALKING from "../../assets/talking.mp4";
import TALK from "../../assets/2dtalk.mp4";
import TALK2 from "../../assets/2dtalk.gif";

function TechRealtime() {
  return (
    <div>
      <PC>
        <div className=" w-fit h-fit flex place-items-center justify-center">
          <div
            className="z-20 left-28 top-48 relative w-[585px] h-[345px]"
            style={{
              backgroundImage: `url(${Ipad})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <img src={TALK2} alt="" /> */}
            <video
              controls={false}
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-[550px] rounded-[8px] top-[20px] left-[18px]"
            >
              <source src={TALK} type="" />
            </video>
          </div>
          <div
            className="z-10 right-24 relative w-[845px] h-[712px] bg-imac"
            style={{
              backgroundImage: `url(${Imac})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <video controls={false} autoPlay loop muted className="absolute ">
              <source src={TALKING} type="video/mp4" />
            </video>
          </div>
        </div>
      </PC>
      <Mobile>
        <div className="w-[403px] flex flex-col items-center">
          <div
            className="z-20 w-[220px] h-[140px] mb-[30px]"
            style={{
              backgroundImage: `url(${Ipad})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img src={TALK2} alt="" />
            {/* <video
            controls={false}
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-[200px] rounded-[8px] top-[20px] left-[18px]"
          >
            <source src={TALK} type="" />
          </video> */}
          </div>
          <div
            className="z-10 w-[250px] h-[218px]"
            style={{
              backgroundImage: `url(${Imac})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <video controls={false} autoPlay loop muted playsInline={false}>
              <source src={TALKING} type="video/mp4" />
            </video>
          </div>
        </div>
      </Mobile>
    </div>
  );
}

export default TechRealtime;
