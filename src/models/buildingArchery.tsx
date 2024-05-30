import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { Mesh } from "three";

function BuildingArchery() {
  const buildingArcheryRef = useRef<Mesh>(null!);
  const { scene, animations } = useGLTF("assets/3D/building-archery.glb");

  return (
    <mesh ref={buildingArcheryRef} position={[0, 0, 0]} scale={[1, 1, 1]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default BuildingArchery;
