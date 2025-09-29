import { useEffect, useState } from "react";

const Timer = ({ initialMinutes = 0, initialSecond = 0, initialHours = 0 }) => {
  const [secondCount, setSecondCount] = useState(initialSecond);
  const [minuteCount, setMinuteCount] = useState(initialMinutes);
  const [hourCount, setHourCount] = useState(initialHours);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      // 🟢🔴🟢 for countdown timer👇

      // timer = setInterval(() => {
      //   if (secondCount > 0) {
      //     setSecondCount(secondCount - 1);
      //   } else if (minuteCount > 0) {
      //     setMinuteCount(minuteCount - 1);
      //     setSecondCount(59);
      //   } else if (hourCount > 0) {
      //     setHourCount(hourCount - 1);
      //     setMinuteCount(59);
      //     setSecondCount(59);
      //   } else {
      //     setIsRunning(false);
      //     clearInterval(timer);
      //   }
      // }, 1000);

      // 🟢🔴🟢 for stopwatch👇

      timer = setInterval(() => {
        if (secondCount < 59) {
          setSecondCount(secondCount + 1);
        } else {
          setSecondCount(0);
          if (minuteCount < 59) {
            setMinuteCount(minuteCount + 1);
          } else {
            setMinuteCount(0);
            setHourCount(hourCount + 1);
          }
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, secondCount, minuteCount, hourCount]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecondCount(initialSecond);
    setMinuteCount(initialMinutes);
    setHourCount(initialHours);
  };

  return (
    <div className="count-container">
      <div
        style={{
          fontSize: "32px",
          marginBottom: "16px",
          fontWeight: "700",
          border: "2px solid red",
          borderRadius: "20px",
          padding: "10px 16px",
        }}
      >
        {String(hourCount).padStart(2, "0")} :
        {String(minuteCount).padStart(2, "0")} :
        {String(secondCount).padStart(2, "0")}
      </div>
      <div className="btn-container">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
