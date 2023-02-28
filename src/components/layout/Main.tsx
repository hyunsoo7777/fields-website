import Button from "../common/Button";
import Title from "../common/Title";
import GIF from "../../assets/main.gif";
import { easeInOut, motion } from "framer-motion";

function Main() {
  return (
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
      <div className="w-[1040px] pt-[420px] flex flex-col items-start z-20">
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
        ></Button>
      </div>
    </div>
  );
}

export default Main;
