import React, { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(progress);
    }, 500);

    () => clearTimeout(timeout);
  }, [progress]);

  return (
    <div style={{ display: "grid", gap: "12px", justifyContent: "center" }}>
      <div
        style={{
          border: "1px solid black",
          width: "500px",
          borderRadius: "50px",
          overflow: "hidden",
          margin: "4px 0",
        }}
      >
        <div
          style={{
            backgroundColor: "green",
            color: `${value >= 5 ? "white" : "black"}`,
            textAlign: "center",
            borderRadius: "50px",
            width: `${value}%`,
            transition: "1s ease-in",
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

const AnimatedProgressBar = () => {
  const values = [2, 5, 10, 30, 75, 100];
  return (
    <div style={{ marginTop: "50px" }}>
      {values.map((value, index) => {
        return <ProgressBar key={index} progress={value} />;
      })}
    </div>
  );
};

export default AnimatedProgressBar;
