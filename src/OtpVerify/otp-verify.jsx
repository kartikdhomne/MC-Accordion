import React, { useState, useRef } from "react";

const OtpVerify = ({ otpLength = 6 }) => {
  const [otpValue, setOtpValue] = useState(new Array(otpLength).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (isNaN(value)) return; // only digits allowed

    const newOtp = [...otpValue];
    newOtp[index] = value.slice(-1); // only last digit
    setOtpValue(newOtp);

    // move to next input
    if (value && index < otpLength - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpValue[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {otpValue.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          maxLength={1}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          style={{
            width: "40px",
            height: "40px",
            textAlign: "center",
            fontSize: "20px",
          }}
        />
      ))}
    </div>
  );
};

export default OtpVerify;
