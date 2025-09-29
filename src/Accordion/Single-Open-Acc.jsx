import { useState } from "react";
import Data from "./data";
import "../App.css";

function AccordionSingleOpen() {
  const [active, setActive] = useState(null);

  {
    /* first main logic */
  }
  const handleClick = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div>
      <h1>Accordion Single Open</h1>
      <div>
        {Data.map((item, index) => {
          const { que, ans } = item;
          return (
            <>
              <div
                key={index}
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
                {/* second main logic */}
                <button onClick={() => handleClick(index)}>
                  {active === index ? "-" : "+"}
                </button>
              </div>
              {/* third main logic */}
              {active === index && <div className="ans">{ans}</div>}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default AccordionSingleOpen;
