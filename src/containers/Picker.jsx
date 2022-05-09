import React from "react";
import state from "../utilities/State";
import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio";

function Picker() {
  const { current, parts } = useSnapshot(state);

  let curr = "b";
  if (current === "body") curr = "b";
  else if (current === "wheel") curr = "w";

  return (
    <div
      className="picker-container"
      style={{ display: current ? "block" : "none" }}
    >
      <h1>{current}</h1>
      <HexColorPicker
        className="picker"
        color={parts[curr].color}
        onChange={(color) => (state.parts[curr].color = color)}
      />
      <div className="slider-container">
        <p>Roughness</p>
        <input
          type="range"
          min={0}
          max={1000}
          value={parts[curr].roughness * 1000}
          onChange={(e) =>
            (state.parts[curr].roughness = e.target.value / 1000)
          }
        />
      </div>
      <div className="slider-container">
        <p>Metalness</p>
        <input
          type="range"
          min={0}
          max={1000}
          value={parts[curr].metalness * 1000}
          onChange={(e) =>
            (state.parts[curr].metalness = e.target.value / 1000)
          }
        />
      </div>
    </div>
  );
}

export default Picker;
