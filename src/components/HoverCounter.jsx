import React from "react";

const HoverCounter = ({ count, increament, theme }) => {
  const style =
  theme === "dark" ? { backgroundColor: "black", color: "white" } : null;
  return (
    <div>
      <h2 onMouseOver={increament} style={style}>
        Hover {count} time
      </h2>
    </div>
  );
};

export default HoverCounter;
