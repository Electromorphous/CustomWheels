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
        position={[10, 10, 0]}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      /> */}
      {/* Background */}
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial side={THREE.BackSide} color="#000" />
      </mesh>
    </Environment>
  );
}
