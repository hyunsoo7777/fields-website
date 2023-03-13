import React from "react";
import { Mobile, PC } from "../../utils/MediaQuery";

interface AboutProps {
  top?: string;

  width: string;
  children: React.ReactNode;
}

function AboutCont(props: AboutProps) {
  return (
    <>
      <PC>
        <div
          className={`w-[${props.width}] flex flex-col items-center ${
            props.top ? `mt-[${props.top}]` : ""
          }`}
        >
          {props.children}
        </div>
      </PC>
      <Mobile>
        <div
          className={`w-[${props.width}] h-max flex flex-col items-center mt-[${props.top}]`}
        >
          {props.children}
        </div>
      </Mobile>
    </>
  );
}

export default AboutCont;
