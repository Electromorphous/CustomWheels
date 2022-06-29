import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Three from "./containers/Three";
import Loader from "./UI/Loader";
import Picker from "./UI/Picker";
import CustomSelect from "./UI/CustomSelect";
import { carState } from "./utilities/States";
import { useSnapshot } from "valtio";

export default function App() {
  const { currentCar } = useSnapshot(carState);

  const handleCarChange = (e) => {
    carState.currentCar = e.target.value;
  };

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
      <CustomSelect
        value={currentCar}
        handleChange={handleCarChange}
        label="Car"
        options={[
          { value: 0, name: "Lamborghini" },
          { value: 1, name: "Porche" },
        ]}
      />
    </Suspense>
  );
}
