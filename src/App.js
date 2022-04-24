import * as THREE from "three";
import { Suspense, useLayoutEffect, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  MeshReflectorMaterial,
  Environment,
  Stage,
  PresentationControls,
} from "@react-three/drei";
import Loader from "./components/Loader";

function Model(props) {
  const { scene, nodes, materials } = useGLTF(
    "https://electromorphous.github.io/CustomWheels/lambo.glb"
  );

  // console.log(materials.WhiteCar);

  useLayoutEffect(() => {
    scene.traverse(
      (obj) =>
        obj.type === "Mesh" && (obj.receiveShadow = obj.castShadow = true)
    );
    Object.assign(nodes.wheel003_020_2_Chrome_0.material, {
      metalness: 0,
      roughness: 0.4,
      color: new THREE.Color("#222"),
    });
    Object.assign(materials.WhiteCar, {
      roughness: 1,
      metalness: 0,
      // emissive: new THREE.Color("#000000"),
      color: new THREE.Color("#777"),
      envMapIntensity: 0.5,
    });
  }, [scene, nodes, materials]);
  return <primitive object={scene} {...props} />;
}

export default function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(offset);

  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        shadows
        camera={{ fov: 31 }}
        resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
      >
        <color attach="background" args={["#000"]} />
        {/* <fog attach="fog" args={["#fff", 10, 200]} /> */}
        {/* <Environment path="https://electromorphous.github.io/CustomWheels/Environments/cube" /> */}
        <PresentationControls
          speed={1.7}
          global
          zoom={0.95}
          rotation={[-Math.PI / 47, -Math.PI / 5, 0]}
          polar={[0, Math.PI / 2.5]}
        >
          <Stage
            environment={null}
            intensity={0.75}
            contactShadow={false}
            shadowBias={-0.015}
          >
            <Model scale={0.01} />
          </Stage>

          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[500, 500]} />
            <MeshReflectorMaterial
              blur={[30, 20]}
              resolution={1024}
              mixBlur={1}
              mixStrength={50}
              roughness={0.75}
              depthScale={0}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0}
            />
          </mesh>
        </PresentationControls>
      </Canvas>
    </Suspense>
  );
}
