import React, { useState } from "react";

const ProgressBar = () => {
  const TOTAL = 100;

  const [first, setFirst] = useState(10);
  const [second, setSecond] = useState(10);

  const handleFirstChange = (e) => {
    const value = Number(e.target.value);
    setFirst(value);
    setSecond(TOTAL - value);
  };

  const handleSecondChange = (e) => {
    const value = Number(e.target.value);
    setSecond(value);
    setFirst(TOTAL - value);
  };

  return (
    <div style={{ margin: "80px auto", width: "400px" }}>
      <div>
        <input
          type="range"
          min={0}
          max={TOTAL}
          value={first}
          onChange={handleFirstChange}
        />
        <div>First Progress bar value: {first}%</div>
      </div>

      <div>
        <input
          type="range"
          min={0}
          max={TOTAL}
          value={second}
          onChange={handleSecondChange}
        />
        <div>Second Progress bar value: {second}%</div>
      </div>

      <div>Total = {first + second}%</div>
    </div>
  );
};

export default ProgressBar;
