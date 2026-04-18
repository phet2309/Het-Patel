import React, { useEffect, useRef, Suspense } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Group, Object3D } from "three";


interface GltfModelProps {
  scale?: number;
  position?: [number, number, number];
}

export default function Gl({
  scale = 0.4,
  position = [0, 0, 10],
}: GltfModelProps) {
  

  return (
    <Canvas
      camera={{ position: [100, 200, 500] }}
    >
      <ambientLight intensity={1.5} />
      <spotLight position={[20, 20, 20]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel scale={scale} position={position} />
      </Suspense>
    </Canvas>
  );
}

const GltfModel: React.FC<GltfModelProps> = ({
  scale = 40,
  position = [0, 0, 0],
}) => {
  const ref = useRef<Group>(null);
  const leftWing = useRef<Object3D | null>(null);
  const rightWing = useRef<Object3D | null>(null);
  const leftBase = useRef({ x: 0, y: 0, z: 0 });
  const rightBase = useRef({ x: 0, y: 0, z: 0 });

  const model = require('./assets/phoenix_bird.glb');
  const gltf = useLoader(GLTFLoader, model) as GLTF;

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (/^B_Left_Wing_0_/.test(child.name)) {
        leftWing.current = child;
        leftBase.current = {
          x: child.rotation.x,
          y: child.rotation.y,
          z: child.rotation.z,
        };
      }
      if (/^B_Right_Wing_0_/.test(child.name)) {
        rightWing.current = child;
        rightBase.current = {
          x: child.rotation.x,
          y: child.rotation.y,
          z: child.rotation.z,
        };
      }
    });
  }, [gltf]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (ref.current) {
      const speed = 0.6;
      const amp = 5;
      const bob = 0.5;
      const phase = t * speed;

      ref.current.position.x = position[0] + Math.sin(phase) * amp;
      ref.current.position.y = position[1] + Math.sin(phase * 2) * bob;
      ref.current.position.z = position[2];

      ref.current.rotation.y = Math.cos(phase) * (Math.PI / 2);
    }

    const flap = Math.sin(t * 4) * 0.5;
    if (leftWing.current) {
      leftWing.current.rotation.z = leftBase.current.z - flap;
    }
    if (rightWing.current) {
      rightWing.current.rotation.z = rightBase.current.z + flap;
    }
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <primitive object={gltf.scene} />
    </group>
  );
};
