import { proxy } from "valtio";

const state = proxy({
  current: "",
  parts: {
    b: {
      color: "#ffb508",
      roughness: 0.5,
      metalness: 0,
    },
    w: {
      color: "white",
      roughness: 1,
      metalness: 0,
    },
  },
});

export default state;
