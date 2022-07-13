import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Three from "./containers/Three";
import { Grid } from "@mui/material";
import Loader from "./UI/Loader";
import Picker from "./UI/Picker";
import CustomSelect from "./UI/CustomSelect";
import { carState } from "./utilities/States";
import { envState } from "./utilities/States";
import { useSnapshot } from "valtio";

export default function App() {
  const { currentCar } = useSnapshot(carState);
  const { currentEnv } = useSnapshot(envState);

  const handleCarChange = (e) => {
    carState.currentCar = e.target.value;
  };
  const handleEnvChange = (e) => {
    envState.currentEnv = e.target.value;
  };

  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        style={{ height: "100%" }}
        shadows
        camera={{ fov: 31, position: [6, 2.5, 10] }}
        resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
      >
        <Three />
      </Canvas>
      <Picker />
      <Grid
        style={{ position: "absolute", top: 30, left: 20 }}
        container
        alignItems="center"
        justifyContent="flex-start"
        columnSpacing={19}
      >
        <Grid item xs={1}>
          <CustomSelect
            value={currentCar}
            handleChange={handleCarChange}
            label="Car"
            options={[
              { value: 0, name: "Lamborghini" },
              { value: 1, name: "Porche" },
            ]}
          />
        </Grid>
        <Grid item xs={1}>
          <CustomSelect
            value={currentEnv}
            handleChange={handleEnvChange}
            label="Environment"
            options={[
              { value: "stage", name: "Stage" },
              { value: "city", name: "City" },
              { value: "sunset", name: "Sunset" },
              { value: "forest", name: "Forest" },
              { value: "dawn", name: "Dawn" },
              { value: "night", name: "Night" },
              { value: "warehouse", name: "Warehouse" },
              { value: "park", name: "Park" },
            ]}
          />
        </Grid>
      </Grid>
    </Suspense>
  );
}
