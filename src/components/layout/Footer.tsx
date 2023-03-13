import React from "react";
import LogoAllwhite from "../../assets/fieldS_logo_allwhite.svg";
import Social from "../../assets/social_icons.svg";
import Up from "../../assets/Up.svg";
import { Mobile, PC } from "../../utils/MediaQuery";

function Footer() {
  return (
    <div>
      <PC>
        <div className="w-screen py-[100px] bg-primary rounded-t-[100px] flex items-center justify-center">
          <div className="w-[1040px] text-white">
            <div className="flex justify-between">
              <img src={LogoAllwhite} alt="" />
              <img src={Social} alt="" />
            </div>
            <div className="w-[509px] mt-[30px] text-[18px] font-light flex space-x-[20px]">
              <span>회사 소개</span>
              <span>Our team</span>
              <span>서비스 소개</span>
              <span>문의하기</span>
              <span>Blog</span>
              <span>인재 영입</span>
            </div>
            <div className="mt-[47px] h-[93px] flex font-light flex-col justify-between text-[18px]">
              <div>
                <strong>Business</strong> &nbsp;&nbsp; info@field-s.co.kr
              </div>
              <div>
                <strong>본사</strong> &nbsp;&nbsp;서울특별시 송파구 삼전동
                116-16, 5층
              </div>
              <div>
                <strong>지사</strong> &nbsp;&nbsp; 광주광역시 동구 금남로 193-22
              </div>
            </div>
            <div className="w-full mt-[40px] font-light text-[18px] flex justify-between items-end">
              <div>© field S. All Rights Reserved.</div>
              <img
                src={Up}
                alt=""
                className="cursor-pointer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            </div>
          </div>
        </div>
      </PC>
      <Mobile>
        <div className=" w-screen text-white px-[30px] pt-[40px] pb-[70px] bg-primary flex flex-col justify-center items-center">
          <div className="w-[284px]">
            {" "}
            <img src={LogoAllwhite} alt="" width="90px" />
            <div className="h-[192px] mt-[30px] text-[14px] font-light flex flex-col space-y-[16px]">
              <span>회사 소개</span>
              <span>Our team</span>
              <span>서비스 소개</span>
              <span>문의하기</span>
              <span>Blog</span>
              <span>인재 영입</span>
            </div>
            <div className="mt-[30px] flex font-light flex-col gap-[10px] justify-between text-[14px]">
              <div>
                <strong>Business</strong> &nbsp;&nbsp; info@field-s.co.kr
              </div>
              <div>
                <strong>본사</strong> &nbsp;&nbsp;서울특별시 송파구 삼전동
                116-16, 5층
              </div>
              <div>
                <strong>지사</strong> &nbsp;&nbsp; 광주광역시 동구 금남로 193-22
              </div>
            </div>
            <div className="w-full mt-[40px] font-light text-[18px] flex justify-between items-end"></div>
            <div className="flex justify-between items-end">
              <img src={Social} alt="" />
              <img
                src={Up}
                alt=""
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            </div>
          </div>
        </div>
      </Mobile>
    </div>
  );
}

export default Footer;
