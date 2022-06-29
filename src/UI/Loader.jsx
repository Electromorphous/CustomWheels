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
      <div className="loader-container arc-rotate-double">
        <div className="loader">
          <div className="arc-1"></div>
          <div className="arc-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
