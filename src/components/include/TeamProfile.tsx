import React, { useState } from "react";
import Profile from "../../assets/profile_1.png";

interface TeamProps {
  grid: string;
}

function TeamProfile(props: TeamProps) {
  return (
    <div
      className={`${props.grid} w-[280px] h-[280px] rounded-[20px] overflow-hidden before:content-['CEO'] before:absolute before:top-56 before:left-[50%] before:translate-x-[-50%] text-white text-[28px] relative
      `}
      style={{
        backgroundImage: `url(${Profile})`,
      }}
    >
      <div
        className="opacity-0 text-[28px] py-[30px] text-white w-full h-full justify-center items-center hover:backdrop-brightness-40 transition duration-500 cursor-pointer
      hover:opacity-100"
      >
        전준혁
        <br />
        안녕하세요.
      </div>
    </div>
  );
}

export default TeamProfile;
