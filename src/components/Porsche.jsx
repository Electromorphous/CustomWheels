import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { glow } from "../utilities/general";
import { materialState } from "../utilities/States";
import { useSnapshot } from "valtio";

export default function Porsche({ ...props }) {
  const { nodes, materials } = useGLTF(
    "https://electromorphous.github.io/CustomWheels/porsche.glb"
  );

  const { current, parts } = useSnapshot(materialState);

  const bodyRef = useRef();
  const wheelRef = useRef();

  useEffect(() => {
    if (current === "body") {
      glow(bodyRef);
    } else if (current === "wheels") {
      glow(wheelRef);
    }
  }, [current]);

  return (
    <group
      dispose={null}
      {...props}
      onPointerMissed={() => (materialState.current = "")}
    >
      <group
        position={[-0.02, -0.01, 0.06]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.58}
      >
        <mesh
          castShadow
          geometry={nodes.boot_0.geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          geometry={nodes.boot001_0.geometry}
          material={materials.paint}
          material-color={parts.b.color}
          material-roughness={parts.b.roughness}
          material-metalness={parts.b.metalness}
          ref={bodyRef}
        />
        <mesh
          castShadow
          onClick={() => (materialState.current = "body")}
          geometry={nodes.boot002_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          onClick={() => (materialState.current = "body")}
          geometry={nodes.boot003_0.geometry}
          material={materials.tex_shiny}
        />
        <mesh
          castShadow
          onClick={() => (materialState.current = "body")}
          geometry={nodes.boot004_0.geometry}
          material={materials.window}
        />
        <mesh
          castShadow
          onClick={() => (materialState.current = "body")}
          geometry={nodes.boot005_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          onClick={() => (materialState.current = "body")}
          geometry={nodes.boot006_0.geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          onClick={() => (materialState.current = "body")}
          geometry={nodes.boot007_0.geometry}
          material={materials.logo}
        />
        <mesh
          castShadow
          onClick={() => (materialState.current = "body")}
          geometry={nodes.boot008_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          onClick={() => (materialState.current = "body")}
          geometry={nodes.boot009_0.geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          onClick={() => (materialState.current = "body")}
          geometry={nodes.boot010_0.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          onClick={() => (materialState.current = "body")}
          geometry={nodes.boot011_0.geometry}
          material={materials.coat}
        />
        <mesh
          castShadow
          onClick={() => (materialState.current = "body")}
          geometry={nodes.boot011_0001.geometry}
          material={materials.coat}
        />
        <mesh
          castShadow
          onClick={() => (materialState.current = "body")}
          geometry={nodes.bumper_front001_0.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          geometry={nodes.bumper_front001_1.geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          geometry={nodes.bumper_front001_2.geometry}
          material={materials.lights}
        />
        <mesh
          castShadow
          geometry={nodes.bumper_front003_0.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          geometry={nodes.bumper_front003_1.geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          geometry={nodes.bumper_front004_0.geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          geometry={nodes.bumper_front004_1.geometry}
          material={materials.lights}
        />
        <mesh
          castShadow
          geometry={nodes.bumper_front004_2.geometry}
          material={materials.plastic}
        />
        <group rotation={[-0.01, 0, 0]} scale={1.04}>
          <mesh
            castShadow
            geometry={nodes.bumper_front007_0.geometry}
            material={materials.glass}
          />
        </group>
        <mesh
          castShadow
          geometry={nodes.bumper_front009_0.geometry}
          material={materials.tex_shiny}
        />
        <group
          position={[0.04, -1.56, 0.33]}
          rotation={[0.71, -0.07, -0.24]}
          scale={0.01}
        >
          <mesh
            castShadow
            geometry={nodes.Cube001_0.geometry}
            material={materials.plastic}
          />
        </group>
        <group scale={[0.33, 0.32, 0.32]}>
          <mesh
            castShadow
            geometry={nodes.Cube002_0.geometry}
            material={materials.full_black}
          />
        </group>
        {/* back wheels */}
        <group
          position={[0, 0, 0.03]}
          onClick={() => (materialState.current = "wheels")}
        >
          <mesh
            castShadow
            geometry={nodes.Cylinder000_0.geometry}
            material={materials.silver}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder000_1.geometry}
            material={materials.plastic}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder000_2.geometry}
            material={materials.rubber}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder000_3.geometry}
            material={materials["Material.001"]}
            material-color={parts.w.color}
            material-roughness={parts.w.roughness}
            material-metalness={parts.w.metalness}
            ref={wheelRef}
          />
        </group>
        {/* front wheels */}
        <group
          position={[0, 0, 0.03]}
          onClick={() => (materialState.current = "wheels")}
        >
          <mesh
            castShadow
            geometry={nodes.Cylinder001_0.geometry}
            material={materials.silver}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials.plastic}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder001_2.geometry}
            material={materials.rubber}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder001_3.geometry}
            material={materials["Material.001"]}
            material-color={parts.w.color}
            material-roughness={parts.w.roughness}
            material-metalness={parts.w.metalness}
            ref={wheelRef}
          />
        </group>
        <group position={[0.01, 3.58, 0.11]}>
          <mesh
            castShadow
            geometry={nodes.Plane001_0.geometry}
            material={materials.tex_shiny}
          />
        </group>
        <group
          position={[-1.05, 3.51, -0.13]}
          rotation={[-1.44, -0.62, 0.78]}
          scale={0.02}
        >
          <mesh
            castShadow
            geometry={nodes.Plane002_0.geometry}
            material={materials.paint}
          />
        </group>
        <group
          position={[0.44, 3.72, -0.12]}
          rotation={[-1.48, 0.1, 0.8]}
          scale={0.02}
        >
          <mesh
            castShadow
            geometry={nodes.Plane003_0.geometry}
            material={materials.paint}
          />
        </group>
        <group
          position={[-0.49, 3.68, -0.33]}
          rotation={[-1.42, -0.04, 0.8]}
          scale={0.06}
        >
          <mesh
            castShadow
            geometry={nodes.Plane004_0.geometry}
            material={materials.paint}
          />
        </group>
        <group
          position={[0, 3.7, -0.29]}
          rotation={[0.11, 0, 0]}
          scale={[0.39, 0.39, 0.36]}
        >
          <mesh
            castShadow
            geometry={nodes.Plane005_0.geometry}
            material={materials.license}
          />
        </group>
        <group
          position={[0, -3.75, -0.43]}
          rotation={[0.08, 0, -Math.PI]}
          scale={[0.4, 0.4, 0.36]}
        >
          <mesh
            castShadow
            geometry={nodes.Plane006_0.geometry}
            material={materials.license}
          />
        </group>
        <mesh
          castShadow
          geometry={nodes.underbody_0.geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          geometry={nodes.window_rear_0.geometry}
          material={materials.window}
        />
        <mesh
          castShadow
          geometry={nodes.window_rear001_0.geometry}
          material={materials.full_black}
        />
        <group position={[0, 0, 0.01]}>
          <mesh
            castShadow
            geometry={nodes.windshield_0.geometry}
            material={materials.window}
          />
          <mesh
            castShadow
            geometry={nodes.windshield_1.geometry}
            material={materials.plastic}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("https://electromorphous.github.io/CustomWheels/porsche.glb");
