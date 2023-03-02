import React, { useRef, useState } from "react";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";
import { Material } from "three/src/materials/Material";

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
export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const [hover, setHover] = useState(false);
  const myMesh = React.useRef(null);
  const { nodes, materials } = useGLTF("/lemon.gltf") as GLTFResult;
  useFrame(({}) => {
    if (hover) {
      myMesh.current.rotation.z += 0.1;
    }
  });
  return (
    <group {...props} dispose={null}>
      <group position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.ZBrush_defualt_group.geometry}
          material={materials.Material__25}
          scale={0.035}
          ref={myMesh}
          onPointerUp={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        ></mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/lemon.gltf");
