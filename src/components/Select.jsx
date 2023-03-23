import React, {useState} from "react";
import "../styles/select.css"

export default function Select(props){


    const [selectExpand, setSelectExpand] = useState(false)
    const [selectValue, setSelectValue] = useState("")

    const handleSelectExpand = () =>{
        setSelectExpand(!selectExpand)
    }

    const handleSelectValue = (e) => {
        setSelectValue(e.target.textContent);
        setSelectExpand(!selectExpand);
        props.onSelectChange(e.target.textContent);
    };

    let options = props.options

    document.styleSheets[0].cssRules[4].style["min-height"] = `${options.length < 4 ? 34 * options.length : 34 * 3}px`
    
    return(
        <div className="select">
            <p onClick={handleSelectExpand} className="inputSelect">{selectValue ? selectValue : "Seleccionar"} <img className="arrow" src="http://localhost:3000/arrow-down.png" alt="" /></p>
            <ul className={selectExpand ? "selectExpand show" : "selectExpand"}>
                {
                    options ? options.map((option, index) =>{
                        return <li onClick={handleSelectValue} key={index}>{option}</li>
                    })
                    : console.error('there should be options for "options"')
                }
            </ul>
        </div>
    )
}