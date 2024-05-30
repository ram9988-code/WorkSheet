import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { Mesh, Vector2 } from "three";

const Rivers = () => {
  const river = useRef<Mesh>(null!);
  const riverCornerSharp = useGLTF("assets/3D/river-corner-sharp.glb");
  const riverCorner = useGLTF("assets/3D/river-corner.glb");
  const riverCrossing = useGLTF("assets/3D/river-crossing.glb");
  const riverEnd = useGLTF("assets/3D/river-end.glb");
  const riverIntersectionA = useGLTF("assets/3D/river-intersectionA.glb");
  const riverIntersectionB = useGLTF("assets/3D/river-intersectionB.glb");
  const riverIntersectionC = useGLTF("assets/3D/river-intersectionC.glb");
  const riverIntersectionD = useGLTF("assets/3D/river-intersectionD.glb");
  const riverIntersectionE = useGLTF("assets/3D/river-intersectionE.glb");
  const riverIntersectionF = useGLTF("assets/3D/river-intersectionF.glb");
  const riverIntersectionH = useGLTF("assets/3D/river-intersectionH.glb");
  const riverIntersectionG = useGLTF("assets/3D/river-intersectionG.glb");

  const mouse = new Vector2();
  const { camera, raycaster } = useThree();

  // document.addEventListener(
  //   "click",
  //   (event) => {
  //     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  //     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  //     raycaster.setFromCamera(mouse, camera);
  //     let intersection =raycaster.intersectObject()

  //     river.current.position.x = mouse.x;
  //     river.current.position.y = mouse.y;
  //   },
  //   false
  // );

  const [loading, setLoading] = useState(true);

  useFrame((state) => {
    let mouseX = state.mouse.x;
    let mouseY = state.mouse.y;

    const viewport = state.viewport.getCurrentViewport(
      state.camera,
      [0, 0, 15]
    );

    // console.log(mouseX);
  });

  return (
    <>
      <mesh ref={river} position={[0, 0, 0]} scale={[1, 1, 1]}>
        <primitive object={riverCorner.scene} />
      </mesh>
      <mesh position={[1, 0, 0]} scale={[1, 1, 1]}>
        <primitive object={riverCornerSharp.scene} />
      </mesh>
      <mesh position={[-1, 0, 0]} scale={[1, 1, 1]}>
        <primitive object={riverCrossing.scene} />
      </mesh>
      <mesh position={[0.5, 0, 0.85]} scale={[1, 1, 1]}>
        <primitive object={riverEnd.scene} />
      </mesh>
      <mesh position={[0.5, 0, -0.85]} scale={[1, 1, 1]}>
        <primitive object={riverIntersectionA.scene} />
      </mesh>
      <mesh position={[-0.5, 0, 0.85]} scale={[1, 1, 1]}>
        <primitive object={riverIntersectionB.scene} />
      </mesh>
      <mesh position={[-0.5, 0, -0.85]} scale={[1, 1, 1]}>
        <primitive object={riverIntersectionC.scene} />
      </mesh>

      <mesh position={[2, 0, 0]} scale={[1, 1, 1]}>
        <primitive object={riverIntersectionD.scene} />
      </mesh>

      <mesh position={[-2, 0, 0]} scale={[1, 1, 1]}>
        <primitive object={riverIntersectionE.scene} />
      </mesh>
      <mesh position={[1.5, 0, 0.85]} scale={[1, 1, 1]}>
        <primitive object={riverIntersectionF.scene} />
      </mesh>
      <mesh position={[-1.5, 0, 0.85]} scale={[1, 1, 1]}>
        <primitive object={riverIntersectionG.scene} />
      </mesh>
      <mesh position={[1.5, 0, -0.85]} scale={[1, 1, 1]}>
        <primitive object={riverIntersectionH.scene} />
      </mesh>
      {/* <mesh position={[-1.5, 0, -0.85]} scale={[1, 1, 1]}>
        <primitive object={buildingsmelter.scene} />
      </mesh>
      <mesh position={[0, 0, 1.7]} scale={[1, 1, 1]}>
        <primitive object={buildingTower.scene} />
      </mesh>
      <mesh position={[0, 0, -1.7]} scale={[1, 1, 1]}>
        <primitive object={buildingVillage.scene} />
      </mesh>
      <mesh position={[1, 0, 1.7]} scale={[1, 1, 1]}>
        <primitive object={buildingWall.scene} />
      </mesh>
      <mesh position={[-1, 0, 1.7]} scale={[1, 1, 1]}>
        <primitive object={buildingWalls.scene} />
      </mesh>
      <mesh position={[1, 0, -1.7]} scale={[1, 1, 1]}>
        <primitive object={buildingWatermill.scene} />
      </mesh>
      <mesh position={[-1, 0, -1.7]} scale={[1, 1, 1]}>
        <primitive object={buildingWizardTower.scene} />
      </mesh> */}
    </>
  );
};

export default Rivers;
