import React from "react";

export default function Survey(){

    return(
        <section className="containerSurvey">
            <h2>Descubriendo tu opinión</h2>
            <section className="surveysQuestions">
                <article className="question">
                    <img src="/img-encuesta1.png" alt="" />
                    <div className="infoQuestion">
                        <h3>Titulo</h3>
                        <p>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
                        <button>¡Dar mi opinión!</button>
                    </div>
                </article>

                <article className="question">
                    <img src="/img-encuesta2.png" alt="" />
                    <div className="infoQuestion">
                        <h3>Titulo</h3>
                        <p>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
                        <button>¡Dar mi opinión!</button>
                    </div>
                </article>
            </section>
        </section>
    )
}