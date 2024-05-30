import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { Mesh } from "three";

function Bridge() {
  const bridgeRef = useRef<Mesh>(null!);
  const { scene, animations } = useGLTF("assets/3D/bridge.glb");

  return (
    <mesh ref={bridgeRef} position={[2, 0, 0]} scale={[1, 1, 1]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Bridge;
