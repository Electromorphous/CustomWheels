import * as THREE from "three";
import { Suspense, useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  MeshReflectorMaterial,
  Environment,
  Stage,
  PresentationControls,
} from "@react-three/drei";

function Model(props) {
  const { scene, nodes, materials } = useGLTF("/lambo.glb");

  // console.log(materials.WhiteCar);

  useLayoutEffect(() => {
    scene.traverse(
      (obj) =>
        obj.type === "Mesh" && (obj.receiveShadow = obj.castShadow = true)
    );
    Object.assign(nodes.wheel003_020_2_Chrome_0.material, {
      metalness: 0.9,
      roughness: 0.4,
      color: new THREE.Color("#222"),
    });
    Object.assign(materials.WhiteCar, {
      roughness: 0,
      metalness: 0.3,
      // emissive: new THREE.Color("#000"),
      // color: new THREE.Color("#ff0000"),
      envMapIntensity: 0.5,
    });
  }, [scene, nodes, materials]);
  return <primitive object={scene} {...props} />;
}

export default function App() {
  return (
    <Canvas shadows camera={{ fov: 37 }}>
      <color attach="background" args={["#000"]} />
      {/* <fog attach="fog" args={["#fff", 10, 200]} /> */}
      <Suspense fallback={null}>
        {/* <Environment path="/cube" /> */}
        <PresentationControls
          speed={1.5}
          global
          // zoom={0.7}
          // polar={[-0.1, Math.PI / 4]}
        >
          <Stage
            environment={null}
            intensity={1}
            contactShadow={false}
            shadowBias={-0.0015}
          >
            <Model scale={0.01} />
          </Stage>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[500, 500]} />
            <MeshReflectorMaterial
              blur={[30, 10]}
              resolution={777}
              mixBlur={1}
              mixStrength={50}
              roughness={0.75}
              depthScale={0}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0.5}
            />
          </mesh>
        </PresentationControls>
      </Suspense>
    </Canvas>
  );
}
