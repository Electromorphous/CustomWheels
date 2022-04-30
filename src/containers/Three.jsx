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
import Environment1 from "./Environment1";

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

      <Environment1 />

      <OrbitControls
        target={[0, 0.05, 0]}
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2.2}
        maxDistance={0.75}
        minDistance={0.4}
        enablePan={false}
        rotateSpeed={0.69}
      />

      <ambientLight intensity={0.2} />
      {/* Ceiling */}
      {/* <Striplight
        rotation-x={Math.PI / 2}
        position={[0, 4, -6]}
        scale={[10, 1, 1]}
      />
      <Striplight
        rotation-x={Math.PI / 2}
        position={[0, 4, -4]}
        scale={[10, 1, 1]}
      />
      <Striplight
        rotation-x={Math.PI / 2}
        position={[0, 4, -2]}
        scale={[10, 1, 1]}
      />
      <Striplight
        rotation-x={Math.PI / 2}
        position={[0, 4, 0]}
        scale={[10, 1, 1]}
      />
      <Striplight
        rotation-x={Math.PI / 2}
        position={[0, 4, 2]}
        scale={[10, 1, 1]}
      />
      <Striplight
        rotation-x={Math.PI / 2}
        position={[0, 4, 4]}
        scale={[10, 1, 1]}
      />
      <Striplight
        rotation-x={Math.PI / 2}
        position={[0, 4, 6]}
        scale={[10, 1, 1]}
    /> */}
      {/* Sides */}
      {/* <Striplight
      rotation-y={Math.PI / 2}
      position={[-10, 2, 0]}
      scale={[20, 1, 1]}
      />
      <Striplight
      rotation-y={-Math.PI / 2}
      position={[10, 2, 0]}
      scale={[20, 1, 1]}
    /> */}
      {/* Key */}
      {/* <Ringlight
      scale={2}
      position={[10, 5, 10]}
      onUpdate={(self) => self.lookAt(0, 0, 0)}
    /> */}
      {/* Background */}
      <Model scale={0.001} />

      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, 0]}>
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
      </mesh> */}
    </>
  );
}

export default Three;
