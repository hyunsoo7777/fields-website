import React, { useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect } from "react";

interface TitleProps {
  color: string;
  title: string | JSX.Element;
  fontSize: string;
  fontWeight: string;
  bottom?: string;
  delay?: number;
}

function Title(props: TitleProps) {
  const titleVariant: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: props.delay },
    },
    hidden: { opacity: 0, y: 20 },
  };
  const control = useAnimation();
  const ref = useRef(null);

  // 화면에 나타날때 motion이 작동하기 위해 useInView 추가
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, isInView]);
  return (
    <motion.div
      className={`${props.fontSize} ${props.color} ${props.fontWeight} ${props.bottom} transition-colors duration-500`}
      ref={ref}
      variants={titleVariant}
      initial="hidden"
      animate={control}
    >
      {props.title}
    </motion.div>
  );
}

export default Title;
