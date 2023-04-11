import "../styles/steps.css"

export default function Steps(){

    return(
        <div className="steps">
            <div className="containerCircle active">
                <div className="circle">1</div>
                <p>Diligenciar infromación</p>
                <div className="stick"></div>
            </div>
            <div className="containerCircle">
                <div className="circle">2</div>
                <p>Elegir diseño</p>
                <div className="stick"></div>
            </div>

            <div className="containerCircle">
                <div className="circle">3</div>
                <p>Descargar</p>
            </div>
        </div>
    )
}