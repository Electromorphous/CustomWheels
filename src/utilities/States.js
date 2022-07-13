import { proxy } from "valtio";

export const materialState = proxy({
  current: "",
  parts: {
    b: {
      color: "#ffb508",
      roughness: 0.5,
      metalness: 0,
    },
    w: {
      color: "grey",
      roughness: 0.7,
      metalness: 0,
    },
  },
});

export const carState = proxy({
  currentCar: 0,
});

export const envState = proxy({
  currentEnv: "stage",
});
