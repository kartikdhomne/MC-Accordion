import React, { useState } from "react";
import "../App.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); // Avoid `eval` in production for security.
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator-screen">
        <div className="calculator-input">{input || "0"}</div>
        <div className="calculator-result">{result}</div>
      </div>
      <div className="calculator-buttons">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          ".",
          "0",
          "=",
          "+",
        ].map((btn) => (
          <button
            key={btn}
            onClick={btn === "=" ? calculateResult : () => handleInput(btn)}
            className="calculator-button"
          >
            {btn}
          </button>
        ))}
        <button onClick={clearInput} className="calculator-button clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
