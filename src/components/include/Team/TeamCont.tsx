import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import TeamProfile from "./TeamProfile";
import { Mobile, PC } from "../../../utils/MediaQuery";

function TeamCont(props) {
  return (
    <>
      <PC>
        <div className="grid grid-cols-3 gap-[80px]">
          <TeamProfile
            title="CEO"
            name="Junhyeok Jeon"
            grid="col-start-2"
          ></TeamProfile>
          <TeamProfile
            title="AI Engineer"
            name="Junhyeok Jeon"
            grid="col-start-1 col-end-2"
          ></TeamProfile>
          <TeamProfile
            title="Server Engineer"
            name="Junhyeok Jeon"
            grid="..."
          ></TeamProfile>
          <TeamProfile
            title="iOS Engineer"
            name="Junhyeok Jeon"
            grid="..."
          ></TeamProfile>
          <TeamProfile
            title="Web Programmer"
            name="Junhyeok Jeon"
            grid="..."
          ></TeamProfile>
          <TeamProfile
            title="Unreal Engineer"
            name="Junhyeok Jeon"
            grid="..."
          ></TeamProfile>
          <TeamProfile
            title="3D Character
Artist"
            name="Junhyeok Jeon"
            grid="..."
          ></TeamProfile>
          <TeamProfile
            title="Environment
Artist"
            name="Junhyeok Jeon"
            grid="..."
          ></TeamProfile>
          <TeamProfile
            title="Product Designer"
            name="Junhyeok Jeon"
            grid="..."
          ></TeamProfile>
          <TeamProfile
            title="Product Manager"
            name="Junhyeok Jeon"
            grid="..."
          ></TeamProfile>
        </div>
      </PC>
      <Mobile>
        <div className="grid grid-cols-2 gap-[12px] mt-[50px] justify-center">
          <TeamProfile
            grid="col-start-1..."
            title="CEO"
            name="Junhyeok Jeon"
          ></TeamProfile>
          <TeamProfile
            grid="col-start-2 ..."
            title="AI Engineer"
            name="Junhyeok Jeon"
          ></TeamProfile>
          <TeamProfile
            title="Server Engineer"
            name="Junhyeok Jeon"
            grid="..."
          ></TeamProfile>
          <TeamProfile
            title="iOS Engineer"
            name="Junhyeok Jeon"
            grid="..."
          ></TeamProfile>
          <TeamProfile
            title="Web Programmer"
            name="Junhyeok Jeon"
            grid="..."
          ></TeamProfile>
          <TeamProfile
            title="Unreal Engineer"
            name="Junhyeok Jeon"
            grid="..."
          ></TeamProfile>
          <TeamProfile
            title="3D Character
Artist"
            name="Junhyeok Jeon"
            grid="..."
          ></TeamProfile>
          <TeamProfile
            title="Environment
Artist"
            name="Junhyeok Jeon"
            grid="..."
          ></TeamProfile>
          <TeamProfile
            title="Product Designer"
            name="Junhyeok Jeon"
            grid="..."
          ></TeamProfile>
          <TeamProfile
            title="Product Manager"
            name="Junhyeok Jeon"
            grid="..."
          ></TeamProfile>
        </div>
      </Mobile>
    </>
  );
}

export default TeamCont;
