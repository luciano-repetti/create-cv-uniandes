import React, { useState, useEffect } from "react";

export default function Select(props) {
  const [selectExpand, setSelectExpand] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSelectExpand = () => {
    setSelectExpand(!selectExpand);
  };

  const handleSelectValue = (e) => {
    const selectedValue = e.target.textContent;
    setSelectValue(selectedValue);
    setSelectExpand(!selectExpand);
    if (selectedValue === "Otro") {
      setInputValue("");
    } else {
      props.onSelectChange(e.target.id, props._id);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    props.onSelectChange(e.target.value, props._id);
  };

  let options = props.options;
  const { defaultValue } = props;

  useEffect(() => {
    setSelectValue(defaultValue || "");
  }, [defaultValue]);

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
          ? options.map((option) => {
              return (
                <li onClick={handleSelectValue} id={option.id} key={option.id}>
                  {option.name}
                </li>
              );
            })
          : console.error('there should be options for "options"')}
      </ul>
    </div>
  );
}