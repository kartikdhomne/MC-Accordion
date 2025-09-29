import { useState } from "react";
import Data from "./data"
import "../App.css";

function AccordionMultiOpen() {
  const [active, setActive] = useState([]);

  const handleClick = (index) => {
    setActive(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Close the section
          : [...prev, index] // Open the section
    );
  };

  return (
    <div>
      <h1>Accordion Multi Open</h1>
      <div>
        {Data.map((item, index) => {
          const { que, ans } = item;
          return (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  paddingTop: "8px",
                  paddingBottom: "12px",
                }}
              >
                <span>{que}</span>
                <button onClick={() => handleClick(index)}>
                  {active.includes(index) ? "-" : "+"}
                </button>
              </div>
              {active.includes(index) && <div className="ans">{ans}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AccordionMultiOpen;
