import React from "react";

interface ContainerProps {
  size: string;
  index: string;
  background: string;
  ref: string;
}
const ContainerSize = {
  pc: "w-screen pt-[200px] pb-[250px] flex flex-col justify-between items-center",
  mobile:
    "w-[430px] pt-[100px] pb-[100px] flex flex-col justify-between items-center text-center",
};
function Container(props: ContainerProps) {
  return (
    <div
      className={`${ContainerSize[props.size]} bg-${props.background} z-${
        props.index
      }`}
      ref={props.ref}
    ></div>
  );
}

export default Container;
