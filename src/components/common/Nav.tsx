import Logo from "../../assets/fieldS_logo.svg";
import Menu from "../../assets/hamburger.svg";
import Logo_white from "../../assets/fieldS_logo_allwhite.svg";
import Button from "../common/Button";
import { Mobile, PC } from "../../utils/MediaQuery";
import { useState } from "react";
import Modal from "./Modal";

interface NavProps {
  dark: boolean;
  aboutContainerRef: React.RefObject<HTMLDivElement>;
  techContainerRef: React.RefObject<HTMLDivElement>;
  serviceContainerRef: React.RefObject<HTMLDivElement>;
  teamContainerRef: React.RefObject<HTMLDivElement>;
  contactContainerRef: React.RefObject<HTMLDivElement>;
}

function Nav_dark(props: NavProps) {
  const [menu, setMenu] = useState(true);
  return (
    <div className="fixed z-50">
      <PC>
        <div className="w-[1040px] mt-[30px] py-[20px] flex justify-between items-center">
          <a href="/">
            <img
              src={props.dark ? Logo : Logo_white}
              alt=""
              className="w-[140px] mr-[101px]"
            />
          </a>
          <div className="w-[500px] box-border space-x-[30px] flex items-center justify-between font-medium text-[18px] mr-[30px] rounded-[100px] py-[9px] px-[32px] bg-white">
            <div
              className="hover:text-secondary cursor-pointer transition-all duration-300 ease-out"
              onClick={() => {
                window.scrollTo({
                  top: props.aboutContainerRef.current.offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              About us
            </div>
            <div
              className="hover:text-secondary cursor-pointer transition-all duration-300 ease-out"
              onClick={() => {
                window.scrollTo({
                  top: props.techContainerRef.current.offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              Technology
            </div>
            <div
              className="hover:text-secondary cursor-pointer transition-all duration-300 ease-out"
              onClick={() => {
                window.scrollTo({
                  top: props.serviceContainerRef.current.offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              Our service
            </div>
            <div
              className="hover:text-secondary cursor-pointer transition-all duration-300 ease-out"
              onClick={() => {
                window.scrollTo({
                  top: props.teamContainerRef.current.offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              Our team
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              size="sm"
              title="문의하기"
              initial="false"
              contactContainerRef={props.contactContainerRef}
            ></Button>
          </div>
        </div>
      </PC>
      <Mobile>
        {menu ? null : (
          <Modal
            menu={menu}
            setMenu={setMenu}
            aboutContainerRef={props.aboutContainerRef}
            techContainerRef={props.techContainerRef}
            serviceContainerRef={props.serviceContainerRef}
            teamContainerRef={props.teamContainerRef}
            contactContainerRef={props.contactContainerRef}
          ></Modal>
        )}
        <div className="w-screen h-[50px] px-[20px] flex justify-between items-center">
          <a href="/">
            <img src={props.dark ? Logo : Logo_white} alt="" width="90px" />
          </a>
          <div className="flex flex-col gap-[4px] justify-end hover:cursor-pointer">
            <img
              src={Menu}
              alt=""
              width="30px"
              height="30px"
              onClick={() => setMenu(!menu)}
            />
          </div>
        </div>
      </Mobile>
    </div>
  );
}

export default Nav_dark;
