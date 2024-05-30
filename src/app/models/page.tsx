"use client";
import Ground from "@/components/Ground";
import Player from "@/components/Player";
import Buildings from "@/components/assets/Buildings";
import Rivers from "@/components/assets/Rivers";
import Experience from "@/models/Experience";
import Bridge from "@/models/bridge";
import BuildingArchery from "@/models/buildingArchery";
import { Physics } from "@react-three/cannon";
import { OrbitControls, PivotControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const ModelPage = () => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-between">
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [0, 0.5, 3],
          }}
          className="w-full h-screen bg-transparent"
        >
          <Suspense>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <Sky />
            {/* <OrbitControls /> */}
            <Experience>
              <Buildings />
            </Experience>
          </Suspense>
        </Canvas>
      </div>
      <div className="flex h-screen flex-col items-center justify-between">
        <Canvas className="w-full h-screen bg-transparent">
          <Suspense>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <Sky />
            <PivotControls
              anchor={[-1.1, -1.1, -1.1]}
              scale={0.75}
              lineWidth={3.5}
            >
              <Rivers />
            </PivotControls>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default ModelPage;
