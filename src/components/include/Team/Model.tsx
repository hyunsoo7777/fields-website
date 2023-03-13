import React, { useRef, useState } from "react";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Material } from "three/src/materials/Material";
import { useSpring, animated, config } from "@react-spring/three";

type GLTFResult = GLTF & {
  nodes: {
    [x: string]: any;
    Pyramid: THREE.Mesh;
  };
  materials: {
    [x: string]: Material | Material[];
    ["default"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props) {
  const [angle, setAngle] = useState(0);
  const { rotation } = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [0, angle, 0] },
    config: { duration: 500 },
  });

  const myMesh = useRef<THREE.Group>(null);
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/DH1024.gltf") as GLTFResult;
  return (
    <animated.group
      {...props}
      dispose={null}
      ref={myMesh}
      rotation={rotation}
      onClick={() => {
        setAngle(angle + 2 * Math.PI);
      }}
    >
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sockes.geometry}
            material={materials.Material__2}
            scale={0.01}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.base008.geometry}
            material={materials.Material__2}
            scale={0.01}
          />
        </group>
        <group position={[0.32, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere004.geometry}
            material={materials.Material__2}
            scale={0.01}
          />
        </group>
      </group>
    </animated.group>
  );
}

useGLTF.preload("/DH1024.gltf");
