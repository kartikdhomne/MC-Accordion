import React, { useEffect, useState } from "react";

const TimerTest = ({
  initialHour = 1,
  initialMinute = 2,
  initialSecond = 10,
}) => {
  const [hour, setHour] = useState(initialHour);
  const [minute, setMinute] = useState(initialMinute);
  const [second, setSecond] = useState(initialSecond);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        if (second > 0) {
          setSecond(second - 1);
        } else if (minute > 0) {
          setMinute(minute - 1);
          setSecond(59);
        } else if (hour > 0) {
          setHour(hour - 1);
          setMinute(59);
          setSecond(59);
        } else {
          setIsRunning(false);
          clearInterval(timer);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [second, minute, hour, isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setHour(initialHour);
    setMinute(initialMinute);
    setSecond(initialSecond);
    setIsRunning(false);
  };

  return (
    <div className="count-container">
      <div style={{ display: "flex", gap: "8px" }}>
        <h2>
          {String(hour).padStart(2, "0")}
          <span> : </span> {String(minute).padStart(2, "0")}
          <span> : </span>
          {String(second).padStart(2, "0")}
        </h2>
      </div>
      <div className="btn-container" style={{ display: "flex" }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default TimerTest;
