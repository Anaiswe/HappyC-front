import React, { useState } from "react";

const Filters = ({ value, type, setType, name }) => {
  const [active, isActive] = useState(false);

  const addTypes = (elem) => {
    let newType = [...type];

    if (newType.length === 0) {
      isActive(true);
      newType.push(elem);
      setType(newType);
    } else if (newType.length >= 1) {
      if (newType.indexOf(elem) === -1) {
        isActive(true);
        newType.push(elem);
        setType(newType);
      } else {
        isActive(false);
        for (let i = 0; i < newType.length; i++) {
          if (newType.indexOf(elem) !== -1) {
            const index = newType.indexOf(elem);
            newType.splice(index, 1);
            setType(newType);
          }
        }
      }
    }
    console.log(newType);
  };
  return (
    <button
      className={active ? "active" : "inactive"}
      onClick={() => {
        addTypes(name);
      }}
    >
      {value}
    </button>
  );
};

export default Filters;
