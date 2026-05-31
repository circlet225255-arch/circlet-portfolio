import { Float, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { DoubleSide } from "three";
import { circletMark } from "../assets";

const CircleTBrandMark = () => {
  const groupRef = useRef();
  const logoTexture = useTexture(circletMark);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const elapsed = clock.getElapsedTime();
    groupRef.current.rotation.x = 0.08;
    groupRef.current.rotation.y = elapsed * 0.55;
    groupRef.current.rotation.z = Math.sin(elapsed * 0.45) * 0.04;
  });

  return (
    <Float speed={1.25} rotationIntensity={0} floatIntensity={0.8}>
      <group ref={groupRef} position={[0.15, 0.05, 0]}>
        {Array.from({ length: 10 }).map((_, index) => (
          <mesh key={index} position={[0, 0, -0.02 * (index + 1)]} scale={[2.05, 1.9, 1]}>
            <planeGeometry args={[1.6, 1.48]} />
            <meshBasicMaterial
              map={logoTexture}
              transparent
              alphaTest={0.05}
              color={index < 5 ? "#083544" : "#0f766e"}
              opacity={0.38}
              side={DoubleSide}
              toneMapped={false}
            />
          </mesh>
        ))}

        <mesh position={[0, 0, 0.04]} scale={[2.05, 1.9, 1]}>
          <planeGeometry args={[1.6, 1.48]} />
          <meshBasicMaterial map={logoTexture} transparent alphaTest={0.05} side={DoubleSide} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

const SpacemanCanvas = () => {
  return (
    <Canvas className="scene-canvas" camera={{ position: [0, 0, 4.2], fov: 42 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={1.6} />
        <directionalLight position={[4, 4, 3]} intensity={2.4} color="#ffe8ba" />
        <pointLight position={[-3, 1, 4]} intensity={4} color="#44d9ce" />
        <CircleTBrandMark />
      </Suspense>
    </Canvas>
  );
};

export default SpacemanCanvas;
