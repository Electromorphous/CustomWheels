import React from "react";
import * as THREE from "three";
import { Environment } from "@react-three/drei";

export function Striplight(props) {
  return (
    <mesh {...props}>
      <planeGeometry />
      <meshBasicMaterial color="white" toneMapped={false} />
    </mesh>
  );
}

export function Ringlight(props) {
  return (
    <mesh {...props}>
      <ringGeometry args={[1, 2, 64]} />
      <meshBasicMaterial color="white" toneMapped={false} />
    </mesh>
  );
}

export default function Environment1() {
  return (
    <Environment background>
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial side={THREE.BackSide} color="#00ff00" />
      </mesh>
    </Environment>
  );
}
