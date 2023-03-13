import Button from "../common/Button";
import Title from "../common/Title";
import GIF from "../../assets/main.gif";
import { easeInOut, motion } from "framer-motion";
import { Mobile, PC } from "../../utils/MediaQuery";

interface MainProps {
  techContainerRef: React.RefObject<HTMLDivElement>;
}

function Main(props: MainProps) {
  return (
    <div>
      <PC>
        <div className="w-full pb-[100px] flex justify-center">
          <motion.div
            className="w-full h-[850px] z-10 absolute"
            style={{
              backgroundImage: `url(${GIF})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            animate={{
              opacity: [0, 0, 1],
              transition: { duration: 2.4, ease: easeInOut },
            }}
          ></motion.div>
          <div className="w-[1040px] mt-[420px] flex flex-col items-start z-20">
            <Title
              title="몰입감 있는 경험"
              color="text-white"
              fontSize="text-[70px]"
              fontWeight="font-bold"
              bottom="mb-[30px]"
              delay={1}
            ></Title>
            <Title
              title="사실같은 경험을 할 수 있는 서비스를 만들고 있어요."
              color="text-white"
              fontSize="text-[30px]"
              fontWeight="font-medium"
              bottom="mb-[30px]"
              delay={1}
            ></Title>
            <Button
              size="lg"
              title="더 알아보기"
              delay={1}
              duration={0.6}
              initial="hidden"
              techContainerRef={props.techContainerRef}
            ></Button>
          </div>
        </div>
      </PC>
      <Mobile>
        <div className="w-full flex justify-center pb-[180px] ">
          <motion.div
            className="w-full h-[650px] z-10 absolute"
            style={{
              backgroundImage: `url(${GIF})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            animate={{
              opacity: [0, 0, 1],
              transition: { duration: 1.5, ease: easeInOut },
            }}
          ></motion.div>
          <div className="w-[430px] pt-[250px] flex flex-col items-center z-20">
            <Title
              title="몰입감 있는 경험"
              color="text-white"
              fontSize="text-[35px]"
              fontWeight="font-bold"
              bottom="mb-[26px]"
            ></Title>
            <Title
              title={
                <span>
                  사실같은 경험을 할 수 있는
                  <br />
                  서비스를 만들고 있어요.
                </span>
              }
              color="text-white"
              fontSize="text-[20px]"
              fontWeight="font-medium"
              bottom="mb-[20px]"
            ></Title>
            <Button
              size="mobile_lg"
              title="더 알아보기"
              delay={1}
              initial="hidden"
            ></Button>
          </div>
        </div>
      </Mobile>
    </div>
  );
}

export default Main;
