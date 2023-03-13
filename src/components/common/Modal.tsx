import React, { useState } from "react";
import Logo from "../../assets/fieldS_logo.svg";
import Close from "../../assets/close.svg";
import Button from "./Button";

function Modal(props) {
  return (
    <div className="w-screen h-screen z-40 bg-black bg-opacity-70">
      <div className="w-screen px-[20px] pb-[30px] flex flex-col bg-white font-medium text-[18px] text-primary z-50">
        <div className="w-full flex justify-between items-center py-[16px]">
          <a href="/">
            <img src={Logo} alt="" width="90px" />
          </a>
          <div className="hover:cursor-pointer w-[30px]">
            <img
              src={Close}
              alt=""
              onClick={() => props.setMenu(!props.menu)}
            />
          </div>
        </div>
        <div className="mt-[30px] mb-[35px] flex flex-col gap-[20px] text-[18px]">
          <span>About us</span>
          <span>Technology</span>
          <span>Our service</span>
          <span>Our team</span>
        </div>
        <Button initial="false" size="mobile_sm" title="문의하기"></Button>
      </div>
    </div>
  );
}

export default Modal;
