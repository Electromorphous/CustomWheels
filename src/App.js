import { Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  Environment,
  Stage,
  PresentationControls,
} from "@react-three/drei";
import Loader from "./components/Loader";
import Model from "./components/Model";

export default function App() {
  const [zoom, setZoom] = useState(1);

  const handleWheel = (e) => {
    const interval = 0.2;

    if (e.deltaY < 0 && zoom <= 2) {
      setZoom((prev) => prev + interval);
    } else if (e.deltaY > 0 && zoom >= 0.6) {
      setZoom((prev) => prev - interval);
    }
  };

  return (
    <Suspense fallback={<Loader />}>
      <div onWheel={handleWheel} style={{ height: "100vh" }}>
        <Canvas
          style={{ height: "100%" }}
          shadows
          camera={{ fov: 31 }}
          // resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
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
              <Model scale={0.001} zoom={zoom} />
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
      </div>
    </Suspense>
  );
}
