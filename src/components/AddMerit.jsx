export default function AddMerit() {

    return(
        <>
            <h3>Meritos y distinciones</h3>
            <fieldset style={{flexDirection: "column"}}>
                <label className="labelSlider" style={{ width: "100%"}}>
                    Nombre del reconcocimiento
                    <input placeholder="Ejemplo: becas, premios" type="text" />
                </label>
                <label className="labelSlider" style={{ width: "40%"}}>
                    Año y mes de entrega
                    <input placeholder="2010-01" type="text" />
                </label>
            </fieldset>
        </>
    )
}