import { useMemo, useLayoutEffect, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { scene, nodes, materials } = useGLTF(
    "https://electromorphous.github.io/CustomWheels/lambo.glb"
  );

  // const [camPos, setCamPos] = useState([]);

  // const ref = useRef();

  // console.log(materials.WhiteCar);

  useFrame(({ camera }) => {
    camera.zoom = THREE.MathUtils.lerp(camera.zoom, props.zoom, 0.2);

    camera.updateProjectionMatrix();
    // setCamPos(camera.position);
  }, 0);

  // useEffect(() => {
  //   console.log("cam");
  //   console.log(camPos);
  // }, [camPos]);

  // if (ref.current) console.log(ref.current.position);

  useLayoutEffect(() => {
    scene.traverse(
      (obj) =>
        obj.type === "Mesh" && (obj.receiveShadow = obj.castShadow = true)
    );
    Object.assign(nodes.wheel003_020_2_Chrome_0.material, {
      metalness: 0,
      roughness: 1,
      color: new THREE.Color("#222"),
    });
    Object.assign(materials.WhiteCar, {
      metalness: 0,
      roughness: 1,
      // emissive: new THREE.Color("#000000"),
      color: new THREE.Color("#777"),
      envMapIntensity: 0.5,
    });
  }, [scene, nodes, materials]);
  return <primitive object={scene} {...props} />;
}

export default Model;
