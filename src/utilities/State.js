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
      color: "grey",
      roughness: 0.7,
      metalness: 0,
    },
  },
});

export default state;
