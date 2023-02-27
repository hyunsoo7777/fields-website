import React, { useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect } from "react";

interface TextProps {
  color: string;
  title: string;
  fontSize: string;
  fontWeight: string;
  delay?: number;
}

function Text(props: TextProps) {
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
      className={`${props.fontSize} ${props.color} ${props.fontWeight} text-center`}
      ref={ref}
      variants={titleVariant}
      initial="hidden"
      animate={control}
    >
      {props.title}
    </motion.div>
  );
}

export default Text;