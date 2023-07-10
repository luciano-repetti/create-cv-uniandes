import { useState } from "react";

export default function InformalCourse({
  text,
  textHeader,
  icono,
  desc,
  onDelete,
}) {
  const [check, setCheck] = useState(false);

  const handleDelete = () => {
    onDelete();
  };

  return (
    <article style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
      <div className="headerCurso">
        <img src={`./${icono}.png`} alt="" />
        <h4>{textHeader}</h4>
      </div>
      <fieldset>
        <label className="labelDescription small">
          {text}
          <textarea
            className="resumeWork"
            placeholder={
              desc
                ? desc
                : "Cursos extracurriculares, por ejemplo cursos de programación o habilidades blandas. Los de Coursera, Udemy, etc siempre y cuando este relacionados con tu profesión."
            }
          ></textarea>
        </label>
      </fieldset>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", gap: "1em" }}>
            <label style={{ width: "180px" }} className="labelSlider labelDate">
              Fecha de inicio
              <input type="text" placeholder="2010-01" />
            </label>

            <label style={{ width: "180px" }} className="labelSlider labelDate">
              Fecha de finalización
              <input disabled={check} type="text" placeholder="2015-01" />
            </label>
          </div>

          <button onClick={handleDelete} className="buttonDelete">
            <img src="./icono-eliminar.png" alt="" />
          </button>
        </div>

        <label className="labelSlider checkCharge">
          <input
            type="checkbox"
            onChange={() => setCheck(!check)}
            name=""
            id=""
          />
          Actualmente lo curso
        </label>
      </div>
    </article>
  );
}
