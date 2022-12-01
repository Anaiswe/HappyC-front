import React, { useState } from "react";

const Filters = ({ value, type, setType, name, src }) => {
  const [selected, isSelected] = useState(false);

  const addTypes = (elem) => {
    let newType = [...type];

    if (newType.length === 0) {
      isSelected(true);
      newType.push(elem);
      setType(newType);
    } else if (newType.length >= 1) {
      if (newType.indexOf(elem) === -1) {
        isSelected(true);
        newType.push(elem);
        setType(newType);
      } else {
        isSelected(false);
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
      className={selected ? "selected" : "normal"}
      onClick={() => {
        addTypes(name);
      }}
    >
      {value}
    </button>
  );
};

export default Filters;
