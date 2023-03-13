import React from "react";
import Location from "../../assets/location.png";
import ContactInput from "../include/ContactInput";
import { Mobile, PC } from "../../utils/MediaQuery";
import ContactMap from "../include/ContactMap";

function Contact() {
  return (
    <div>
      <PC>
        {" "}
        <div className="pt-[200px] pb-[200px] w-full flex flex-col items-center">
          <div className="mb-[150px] font-semibold text-[50px]">
            저희와 이야기 하고 싶으신가요?
          </div>
          <div className="flex space-x-[60px]">
            <img src={Location} alt="" />

            {/* <ContactMap></ContactMap> */}
            <div className="flex flex-col items-center w-[600px] justify-between">
              <div className="font-semibold w-[202px] text-[40px] text-primary">
                Contact us
              </div>
              <div className="w-full flex flex-col gap-[30px]">
                <ContactInput text="이름"></ContactInput>
                <ContactInput text="이메일 주소"></ContactInput>
                <ContactInput
                  text="문의 사항을 남겨주세요"
                  height="320px"
                ></ContactInput>
              </div>
              <button className="w-[600px] h-[68px] text-center bg-primary text-white font-semibold text-[30px] rounded-[50px] hover:bg-secondary transition-all duration-300 ease-out">
                문의하기
              </button>
            </div>
          </div>
        </div>
      </PC>
      <Mobile>
        <div className="pt-[100px] w-full flex flex-col items-center">
          <div className="mb-[50px] font-semibold text-[35px]">
            <div>저희와 이야기</div>
            <div>하고 싶으신가요?</div>
          </div>
          <div className="flex flex-col space-y-[100px]">
            <div className="w-[430px] justify-center flex flex-col items-center ">
              <div className="flex flex-col gap-[15px] items-center justify-center">
                <ContactInput text="이름"></ContactInput>
                <ContactInput text="이메일 주소"></ContactInput>
                <ContactInput
                  text="문의 사항을 남겨주세요"
                  height="320px"
                ></ContactInput>
              </div>
              <button className="w-[270px] h-[52px] mt-[30px] text-center bg-primary text-white font-semibold text-[22px] rounded-[50px] hover:bg-secondary transition-all duration-300 ease-out">
                문의하기
              </button>
            </div>
            <div className="w-full h-[340px]">
              {/* <ContactMap></ContactMap> */}
              <img src={Location} alt="" />
            </div>
          </div>
        </div>
      </Mobile>
    </div>
  );
}

export default Contact;
