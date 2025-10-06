import React, { useState } from "react";

const checkboxData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
      { id: 10, label: "Spinach" },
    ],
  },
  {
    id: 11,
    label: "Dairy",
    children: [
      { id: 12, label: "Milk" },
      { id: 13, label: "Cheese" },
    ],
  },
];

const Checkboxes = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      // update all children recursively
      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          updateChildren(child);
        });
      };
      updateChildren(node);

      // update parent recursively
      const updateParent = (node, data) => {
        const findParent = (items, childId) => {
          for (const item of items) {
            if (item.children?.some((c) => c.id === childId)) return item;
            const parent = item.children && findParent(item.children, childId);
            if (parent) return parent;
          }
          return null;
        };

        const parent = findParent(data, node.id);
        if (parent) {
          const allChecked = parent.children.every((c) => newState[c.id]);
          const someChecked = parent.children.some((c) => newState[c.id]);
          newState[parent.id] = allChecked
            ? true
            : someChecked
            ? "indeterminate"
            : false;
          updateParent(parent, data);
        }
      };
      updateParent(node, checkboxData);

      return newState;
    });
  };

  return (
    <div style={{ marginLeft: "16px" }}>
      {data.map((node) => (
        <div key={node.id}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "4px",
            }}
          >
            <input
              type="checkbox"
              ref={(el) => {
                if (el) el.indeterminate = checked[node.id] === "indeterminate";
              }}
              checked={checked[node.id] === true}
              onChange={(e) => handleChange(e.target.checked, node)}
            />
            <label htmlFor={node.id}>{node.label}</label>
          </div>

          {node.children && (
            <Checkboxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const CheckboxTree = () => {
  const [checked, setChecked] = useState({});
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "250px",
        margin: "0 auto",
      }}
    >
      <h3>Nested Checkboxes</h3>
      <Checkboxes
        data={checkboxData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default CheckboxTree;
