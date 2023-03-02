import React, { Suspense, useState } from "react";
import Profile from "../../assets/profile_1.png";
import Model from "./Model";
import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";

interface TeamProps {
  grid: string;
}

function TeamProfile(props: TeamProps) {
  return (
    <div
      className={`${props.grid} bg-primary w-[280px] h-[280px] rounded-[20px] overflow-hidden before:content-['CEO'] before:absolute before:top-56 before:left-[50%] before:translate-x-[-50%] text-white text-[28px] relative
      `}
    >
      <Canvas
        camera={{
          fov: 105,
          near: 0.3,
          far: 300,
        }}
      >
        <directionalLight position={[10, 10, 10]} castShadow />
        <ambientLight intensity={0.6} />
        <pointLight position={[-10, 0, -20]} intensity={0.3} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default TeamProfile;
