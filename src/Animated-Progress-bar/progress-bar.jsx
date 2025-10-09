import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ display: "grid", gap: "12px", justifyContent: "center" }}>
      <div
        style={{
          border: "1px solid black",
          width: "500px",
          borderRadius: "50px",
          overflow: "hidden",
          padding: "1px",
          margin: "4px 0",
        }}
      >
        <div
          style={{
            backgroundColor: "green",
            color: "white",
            textAlign: "center",
            borderRadius: "50px",
            width: `${progress}%`,
            transform: translateX(-25%)
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

const AnimatedProgressBar = () => {
  const values = [0, 5, 10, 30, 75, 100];
  return (
    <div style={{ marginTop: "50px" }}>
      {values.map((value, index) => {
        return <ProgressBar key={index} progress={value} />;
      })}
    </div>
  );
};

export default AnimatedProgressBar;
