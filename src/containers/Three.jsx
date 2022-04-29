import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  Environment,
  Stage,
  PresentationControls,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import Model from "../components/Model";

function Three() {
  //   const ref = useRef(null);

  //   useEffect(() => {
  //     if (!!ref.current) {
  //       console.log(ref.current);
  //     }
  //   }, [ref.current]);

  return (
    <>
      <color attach="background" args={["#000"]} />
      {/* <fog attach="fog" args={["#fff", 10, 200]} /> */}
      {/* <Environment path="https://electromorphous.github.io/CustomWheels/Environments/cube" /> */}

      <PerspectiveCamera makeDefault position={[0.4, 0.15, 0.45]} />
      <OrbitControls
        target={[0, 0.05, 0]}
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2.2}
        maxDistance={0.75}
        minDistance={0.4}
        enablePan={false}
        rotateSpeed={0.69}
      />

      <Stage
        environment={null}
        intensity={0.7}
        contactShadow={false}
        shadowBias={-0.015}
      >
        <Model scale={0.001} />
      </Stage>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, 0]}>
        <planeGeometry args={[500, 500]} />
        <MeshReflectorMaterial
          blur={[0, 0]}
          resolution={1024}
          mixBlur={1}
          mixStrength={50}
          roughness={0.75}
          depthScale={0}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#010101"
          metalness={0}
        />
      </mesh>
    </>
  );
}

export default Three;
