import Steps from "./Steps";
import "../styles/createResume.css"

export default function CreateResume(){

    return(
        <section className="createResume">
            <h2>Crear hoja de vida</h2>
            <Steps></Steps>
            <article className="containerRol">
                <h3>Selecciona tu rol</h3>
                <div className="containerButton">
                    <button className="buttonSimple">Egresado</button>
                    <button className="buttonSimple">Profesional consolidado</button>
                </div>
            </article>
        </section>
    )
}