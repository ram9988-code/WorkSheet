import { usePlane } from "@react-three/cannon";
import React from "react";
import { PlaneGeometry } from "three";

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[10, 10, 10]} />
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
};

export default Ground;
