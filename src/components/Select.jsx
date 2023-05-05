import React, { useState } from "react";

export default function Select(props) {
  const [selectExpand, setSelectExpand] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSelectExpand = () => {
    setSelectExpand(!selectExpand);
  };

  const handleSelectValue = (e) => {
    console.log(e);
    const selectedValue = e.target.textContent;
    setSelectValue(selectedValue);
    setSelectExpand(!selectExpand);
    if (selectedValue === "Otro") {
      setInputValue("");
    } else {
      props.onSelectChange(selectedValue, props._id);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    props.onSelectChange(e.target.value, props._id);
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
        {selectValue ? (
          selectValue === "Otro" ? (
            <label className="inputOption">
              {selectValue}:{" "}
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onClick={(e) => e.stopPropagation()}
              />
            </label>
          ) : (
            selectValue
          )
        ) : (
          "Seleccionar"
        )}{" "}
        <img className="arrow" src="./arrow-down.png" alt="" />
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
