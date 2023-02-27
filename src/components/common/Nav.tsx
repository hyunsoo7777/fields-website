import Logo from "../../assets/fieldS_logo.svg";
import Logo_white from "../../assets/fieldS_logo_allwhite.svg";
import Button from "../common/Button";

interface NavProps {
  dark: boolean;
  aboutContainerRef: React.RefObject<HTMLDivElement>;
  techContainerRef: React.RefObject<HTMLDivElement>;
  serviceContainerRef: React.RefObject<HTMLDivElement>;
  teamContainerRef: React.RefObject<HTMLDivElement>;
}

function Nav_dark(props: NavProps) {
  return (
    <div className="fixed z-50 w-[1040px] mt-[30px] py-[20px] flex justify-between items-center">
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
      <div className="flex items-center mr-[30px]">
        <Button size="sm" title="문의하기" initial="false"></Button>
      </div>
    </div>
  );
}

export default Nav_dark;
