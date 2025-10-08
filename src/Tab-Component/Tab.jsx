import React, { useState } from "react";

const tabData = [
  { label: "Tab One", desc: "This is tab one data" },
  { label: "Tab Two", desc: "This is tab Two data" },
  { label: "Tab Three", desc: "This is tab Three data" },
];

const Tab = ({ data }) => {
  const [show, setShow] = useState(0);

  return (
    <div
      style={{
        width: "400px",
        margin: "80px auto",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "2px solid red",
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setShow(index)}
            style={{
              flex: 1,
              padding: "10px",
              textAlign: "center",
              cursor: "pointer",
              border: "none",
              outline: "none",
              background: show === index ? "red" : "white",
              color: show === index ? "white" : "black",
              fontWeight: 500,
              transition: "all 0.3s ease",
            }}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div
        style={{
          border: "1px solid red",
          borderTop: "none",
          padding: "16px",
          background: "#f9f9f9",
          borderRadius: "0 0 6px 6px",
          textAlign: "center",
        }}
      >
        {data[show].desc}
      </div>
    </div>
  );
};

const ParentTab = () => {
  return <Tab data={tabData} />;
};

export default ParentTab;
