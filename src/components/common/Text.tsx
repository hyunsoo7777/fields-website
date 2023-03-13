import React, { useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect } from "react";

interface TextProps {
  color: string;
  title: string | JSX.Element;
  fontSize: string;
  fontWeight: string;
  delay?: number;
}

function Text(props: TextProps) {
  return (
    <div
      className={`${props.fontSize} ${props.color} ${props.fontWeight} text-center`}
    >
      {props.title}
    </div>
  );
}

export default Text;
