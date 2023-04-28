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
        props.onSelectChange(e.target.textContent, props._id)
    };

    let options = props.options
    let style = document.styleSheets[5].cssRules[4].style

    // document.styleSheets[3].cssRules[4].style["min-height"] = `${options.length < 4 ? 34 * options.length : 34 * 3}px`
    // style["min-height"] = `${options.length < 4 ? 34 * options.length : 34 * 3}px`
    // style["overflow-y"] = `${options.length < 4 ? "hidden" : "scroll"}`
    // style["overflow-x"] = "hidden"
    // console.log(document.styleSheets);
    
    return(
        <div className="select">
            <p tabIndex={0} onClick={handleSelectExpand} className={selectExpand ? "inputSelect show" : `inputSelect ${props.error ? "error" : ""}`}>{selectValue ? selectValue : "Seleccionar"} <img className="arrow" src="http://localhost:3000/arrow-down.png" alt="" /></p>
            <ul style={{zIndex: props.indexZ}} className={selectExpand ? "selectExpand show" : "selectExpand"}>
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