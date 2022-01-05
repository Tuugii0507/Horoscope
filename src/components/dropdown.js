import React from "react";

const Dropdown = ({ value, someone, setValue }) => {
  
  return (
    <div>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="chooseButton"
      >
        {someone.map((el) => {
          return <option className="dropdown" value={el}>{el}</option>
        })}
      </select>
    </div>
  );
};
export default Dropdown;
