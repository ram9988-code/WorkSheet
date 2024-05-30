"use client";
import { useGLTF } from "@react-three/drei";
import React from "react";

const Buildings = () => {
  const bridge = useGLTF("assets/3D/bridge.glb");
  const buildingArchery = useGLTF("assets/3D/building-archery.glb");
  const buildingCabin = useGLTF("assets/3D/building-cabin.glb");
  const buildingCastle = useGLTF("assets/3D/building-castle.glb");
  const buildingdock = useGLTF("assets/3D/building-dock.glb");
  const buildingfarm = useGLTF("assets/3D/building-farm.glb");
  const buildinghouse = useGLTF("assets/3D/building-house.glb");
  const bulidingMarket = useGLTF("assets/3D/building-market.glb");
  const buildingMill = useGLTF("assets/3D/building-mill.glb");
  const buildingMine = useGLTF("assets/3D/building-Mine.glb");
  const buildingPort = useGLTF("assets/3D/building-port.glb");
  const buildingSheep = useGLTF("assets/3D/building-sheep.glb");
  const buildingsmelter = useGLTF("assets/3D/building-smelter.glb");
  const buildingTower = useGLTF("assets/3D/building-tower.glb");
  const buildingVillage = useGLTF("assets/3D/building-village.glb");
  const buildingWall = useGLTF("assets/3D/building-wall.glb");
  const buildingWalls = useGLTF("assets/3D/building-walls.glb");
  const buildingWatermill = useGLTF("assets/3D/building-watermill.glb");
  const buildingWizardTower = useGLTF("assets/3D/building-wizard-tower.glb");

  return (
    <>
      <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
        <primitive object={bridge.scene} />
      </mesh>
      <mesh position={[1, 0, 0]} scale={[1, 1, 1]}>
        <primitive object={buildingArchery.scene} />
      </mesh>
      <mesh position={[-1, 0, 0]} scale={[1, 1, 1]}>
        <primitive object={buildingCabin.scene} />
      </mesh>
      <mesh position={[0.5, 0, 0.85]} scale={[1, 1, 1]}>
        <primitive object={buildingCastle.scene} />
      </mesh>
      <mesh position={[0.5, 0, -0.85]} scale={[1, 1, 1]}>
        <primitive object={buildingdock.scene} />
      </mesh>
      <mesh position={[-0.5, 0, 0.85]} scale={[1, 1, 1]}>
        <primitive object={buildingfarm.scene} />
      </mesh>
      <mesh position={[-0.5, 0, -0.85]} scale={[1, 1, 1]}>
        <primitive object={buildinghouse.scene} />
      </mesh>

      <mesh position={[2, 0, 0]} scale={[1, 1, 1]}>
        <primitive object={bulidingMarket.scene} />
      </mesh>

      <mesh position={[-2, 0, 0]} scale={[1, 1, 1]}>
        <primitive object={buildingMill.scene} />
      </mesh>
      <mesh position={[1.5, 0, 0.85]} scale={[1, 1, 1]}>
        <primitive object={buildingMine.scene} />
      </mesh>
      <mesh position={[-1.5, 0, 0.85]} scale={[1, 1, 1]}>
        <primitive object={buildingPort.scene} />
      </mesh>
      <mesh position={[1.5, 0, -0.85]} scale={[1, 1, 1]}>
        <primitive object={buildingSheep.scene} />
      </mesh>
      <mesh position={[-1.5, 0, -0.85]} scale={[1, 1, 1]}>
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
      </mesh>
    </>
  );
};

export default Buildings;
