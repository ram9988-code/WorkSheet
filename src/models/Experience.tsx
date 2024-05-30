import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import TWEEN from "@tweenjs/tween.js";
import { Vector2 } from "three";

export default function Experience({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const [pointer] = useState(() => new THREE.Vector3(0, -2, 0));
  const [savedTarget, setSavedTarget] = useState(new THREE.Vector3());

  const [mouse2D, setMouse2D] = useState<Vector2>();

  // Tween js
  const { camera } = useThree();
  const { mouse } = useThree();
  // const controls = useRef<THREE.Mesh>(null!);
  const { raycaster } = useThree();

  useFrame(() => {
    TWEEN.update();
  });

  function onclick(this: any, event: any) {
    console.log("click");
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    var newPos = event.point;
    newPos.y = camera.position.y;

    const tween = new TWEEN.Tween(camera.position).to(
      {
        x: newPos.x,
        y: newPos.y,
        z: newPos.z,
      },
      2000
    );
    // tween.easing(TWEEN.Easing.Quadratic.Out);
    tween.start();
    tween.onComplete(
      function () {
        if (mouse2D) {
          raycaster.setFromCamera(mouse2D, camera);
        }
        const intersects = raycaster.intersectObject(groupRef.current);

        console.log("intersects", intersects);

        if (intersects.length > 0) {
          const point = intersects[0].point;
          pointer.copy(point);
        }
      }.bind(this)
    );
  }

  const groupRef = useRef();
  return (
    <>
      <OrbitControls
        enableDamping
        dampingFactor={0.1}
        enablePan={false}
        enableZoom={false}
      />
      <group
        ref={groupRef}
        onClick={onclick}
        onPointerMove={(e) => {
          e.stopPropagation();
          // setSavedTarget(e.point.clone());
          // if ( !isExpanded ) pointer.copy( e.point );
          // pointer.copy(e.point);
        }}
      >
        {children}
      </group>
    </>
  );
}
