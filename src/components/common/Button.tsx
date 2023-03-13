import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

interface ButtonProps {
  size: string;
  title: string;
  delay?: number;
  duration?: number;
  initial: string;
  techContainerRef?: React.RefObject<HTMLDivElement>;
  contactContainerRef?: React.RefObject<HTMLDivElement>;
}
interface ButtonSizeProps {
  [key: string]: string;
}

function Button(props: ButtonProps) {
  const ButtonSize: ButtonSizeProps = {
    mobile_sm:
      "w-[100px] py-[5px] text-[16px] bg-secondary text-white text-center font-semibold rounded-[50px] cursor-pointer hover:bg-hover hover:text-primary transition-all duration-300 ease-out",
    mobile_lg:
      "w-[180px] py-[10.5px] text-[18px] bg-secondary text-white text-center font-semibold rounded-[37.5px] cursor-pointer hover:bg-hover hover:text-primary transition-all duration-300 ease-out",
    sm: "w-[140px] py-[9px] px-[21px] text-[18px] bg-secondary text-white text-center font-semibold rounded-[50px] cursor-pointer hover:bg-hover hover:text-primary transition-all duration-300 ease-out",
    lg: "px-[62px] py-[14px] text-[25px] mt-[30px] font-semibold bg-secondary text-white text-center rounded-[50px] cursor-pointer hover:bg-hover hover:text-primary transition-all duration-300 ease-out",
  };
  const ButtonVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: props.duration, delay: props.delay },
    },
    hidden: { opacity: 0, y: 30 },
  };
  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, isInView]);

  return (
    <motion.div
      className={ButtonSize[props.size]}
      ref={ref}
      variants={ButtonVariant}
      initial={props.initial}
      animate={control}
      onClick={() => {
        if (props.size == "sm" || props.size == "mobile_sm") {
          window.scrollTo({
            top: props.contactContainerRef.current.offsetTop,
            behavior: "smooth",
          });
        } else {
          window.scrollTo({
            top: props.techContainerRef.current.offsetTop,
            behavior: "smooth",
          });
        }
      }}
    >
      {props.title}
    </motion.div>
  );
}

export default Button;
