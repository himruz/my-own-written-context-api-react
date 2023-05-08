import React from "react";

const ClickCounter = ({ count, increament }) => {
  return (
    <div>
      <button onClick={increament}>{count} Click</button>
    </div>
  );
};

export default ClickCounter;
