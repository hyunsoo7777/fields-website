import React from "react";
import { Mobile, PC } from "../../../utils/MediaQuery";

interface InputProps {
  text: string;
  height?: string;
}
function ContactInput(props: InputProps) {
  return (
    <div>
      <PC>
        <input
          className={`w-full h-[${props.height}] bg-background rounded-[10px] py-[16px] px-[20px] text-[24px] focus:outline-none focus:border-primary-500 focus:ring-primary-500
    placeholder:text-primary-200`}
          type="text"
          placeholder={props.text}
        ></input>
      </PC>
      <Mobile>
        <input
          className={`w-[270px] box-content h-[${props.height}] bg-background rounded-[10px] py-[16px] px-[20px] text-[20px] focus:outline-none focus:border-primary-500 focus:ring-primary-500
    placeholder:text-primary-200`}
          type="text"
          placeholder={props.text}
        ></input>
      </Mobile>
    </div>
  );
}

export default ContactInput;
