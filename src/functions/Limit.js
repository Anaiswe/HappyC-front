// import React from "react";

const Limit = ({ setLimit }) => {
  const handleLimit = (button) => {
    setLimit(button);
  };
  return (
    <div className="count">
      <span>results by : </span>
      <button
        onClick={() => {
          handleLimit(20);
        }}
      >
        20
      </button>
      <button
        onClick={() => {
          handleLimit(50);
        }}
      >
        50
      </button>
      <button
        onClick={() => {
          handleLimit(100);
        }}
      >
        100
      </button>
    </div>
  );
};

export default Limit;
