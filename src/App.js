import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "./components/Loader";
import Three from "./containers/Three";
import Picker from "./containers/Picker";

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        style={{ height: "100%" }}
        shadows
        camera={{ fov: 31, position: [0.4, 0, 0.7] }}
        resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
      >
        <Three />
      </Canvas>
      <Picker />
    </Suspense>
  );
}
