import { useState } from "react"

export function Information({textDesc}){
    const [show, setShow] = useState(false)

    function changeShow() {
        setShow(!show)
    }

    return(
        <div className="containerInformation">
            <button onClick={() => changeShow()}>
                <img src="./icono-pop-up-infor.png" alt="" />
            </button>
            <div className={`containerText arrowLeft ${show ? "show" : ""}` }>
                <p>{textDesc}</p>
            </div>
        </div>
    )
}