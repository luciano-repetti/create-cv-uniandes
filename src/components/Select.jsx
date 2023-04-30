import React, { useState } from "react";
// import "../styles/select.css";

export default function Select(props) {
  const [selectExpand, setSelectExpand] = useState(false);
  const [selectValue, setSelectValue] = useState("");

  const handleSelectExpand = () => {
    setSelectExpand(!selectExpand);
  };

  const handleSelectValue = (e) => {
    setSelectValue(e.target.textContent);
    setSelectExpand(!selectExpand);
    props.onSelectChange(e.target.textContent, props._id);
  };

  let options = props.options;

  return (
    <div className="select">
      <p
        tabIndex={0}
        onClick={handleSelectExpand}
        className={
          selectExpand
            ? "inputSelect show"
            : `inputSelect ${props.error ? "error" : ""}`
        }
      >
        {selectValue ? selectValue : "Seleccionar"}{" "}
        <img
          className="arrow"
          src="./arrow-down.png"
          alt=""
        />
      </p>
      <ul
        style={{ zIndex: props.indexZ }}
        className={selectExpand ? "selectExpand show" : "selectExpand"}
      >
        {options
          ? options.map((option, index) => {
              return (
                <li onClick={handleSelectValue} key={index}>
                  {option}
                </li>
              );
            })
          : console.error('there should be options for "options"')}
      </ul>
    </div>
  );
}
