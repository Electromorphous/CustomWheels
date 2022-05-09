import React from "react";
import { materialState } from "../utilities/States";
import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio";

function Picker() {
  const { current, parts } = useSnapshot(materialState);

  let curr = "b";
  if (current === "body") curr = "b";
  else if (current === "wheels") curr = "w";

  return (
    <div
      className="picker-container"
      style={{ display: current ? "block" : "none" }}
    >
      <h1>{current}</h1>
      <HexColorPicker
        className="picker"
        color={parts[curr].color}
        onChange={(color) => (materialState.parts[curr].color = color)}
      />
      <div className="slider-container">
        <p>Roughness</p>
        <input
          type="range"
          min={0}
          max={1000}
          value={parts[curr].roughness * 1000}
          onChange={(e) =>
            (materialState.parts[curr].roughness = e.target.value / 1000)
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
            (materialState.parts[curr].metalness = e.target.value / 1000)
          }
        />
      </div>
    </div>
  );
}

export default Picker;
