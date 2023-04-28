import React, { children } from "react";
import "../styles/background.css"

export default function Background({children}){

    return(
        <section className="containerBackground">
            <article className="backgroundImage"></article>
            <article className="backgroundGrey">
                {children}
            </article>
        </section>
    )
}