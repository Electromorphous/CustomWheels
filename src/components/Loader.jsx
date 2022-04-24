import React from "react";

const loaderStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "black",
  color: "white",
  fontSize: "2rem",
  zIndex: 100,
};

function Loader() {
  return (
    <div style={loaderStyle}>
      <div class="loader-container arc-rotate-double">
        <div class="loader">
          <div class="arc-1"></div>
          <div class="arc-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
