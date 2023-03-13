import React, { ReactNode, Suspense, useState } from "react";
import { Mobile, PC } from "../../../utils/MediaQuery";

import Profile from "../../assets/profile_1.png";
import Model from "./Model";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";

interface TeamProps {
  grid: string;
  title: string;
  name: string;
}

function getModel(name: string) {
  return <Model />;
}

function TeamProfile(props: TeamProps) {
  const [hover, setHover] = useState(false);
  return (
    <>
      <PC>
        <div
          className={`${props.grid} bg-background w-[250px] h-[250px] rounded-[10px] overflow-hidden relative`}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          <Canvas
            camera={{
              fov: 14,
              near: 0.3,
              far: 300,
            }}
          >
            <directionalLight position={[10, 5, 10]} castShadow />
            <ambientLight intensity={0.7} />
            <pointLight position={[-10, -20, -20]} intensity={0.6} />
            <Suspense fallback={null}>
              <Model hover={hover} />
            </Suspense>
          </Canvas>
          <div className="absolute w-full flex flex-col bottom-[px] z-20 text-primary">
            <span className="text-[24px] font-bold">{props.title}</span>
            <span className="text-[20px] font-regular">{props.name}</span>
          </div>
        </div>
      </PC>
      <Mobile>
        <div
          className={`${props.grid} bg-background flex justify-center items-center w-[130px] h-[165px] rounded-[10px] overflow-hidden before:content-['CEO'] before:absolute before:top-32 before:left-[50%] before:translate-x-[-50%] text-primary text-[15px] relative
     `}
        >
          <Canvas
            camera={{
              fov: 17,
              near: 0.3,
              far: 300,
            }}
          >
            <directionalLight position={[10, 10, 10]} castShadow />
            <ambientLight intensity={0.6} />
            <pointLight position={[-10, 0, -20]} intensity={0.3} />/{" "}
            <Suspense fallback={null}>
              {/* <Model hover={hover} /> */}
              {getModel(props.name)}
            </Suspense>
          </Canvas>
        </div>
      </Mobile>
    </>
  );
}

export default TeamProfile;
