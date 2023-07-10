import { useState } from "react";
import Addition from "./atoms/Addition";
import Select from "./Select";

export function AddSoftware() {
  const [value, setValue] = useState("");
  const [skills, setSkills] = useState([]);

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  function addSkills() {
    setValue("")
    let formatValue = value.charAt(0).toUpperCase() + value.slice(1);
    setSkills((prevState) => [...prevState, formatValue]);
  }

  function deleteSkill(skillSoft) {
    let skillFilter = skills.filter(skill => skill !== skillSoft)
    setSkills(skillFilter)
  }

  return (
    <>
      <h3>Herramientas</h3>
      <div className="inputAdd">
        <input
          placeholder="Escribe aqui la herramienta o software"
          onChange={(e) => changeValue(e)}
          value={value}
          type="text"
        />
        <div className="addInInput">
          <Addition text={"Agregar"} onClick={addSkills} />
        </div>
      </div>
      {skills.length > 0 &&
        skills.map((skill) => <Software textSoft={skill} onDelete={deleteSkill} />)}
    </>
  );
}




function Software({ textSoft, onDelete }) {

  function deleteSkill() {
    onDelete(textSoft)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ display: "flex", gap: "1em" }}>
          <label style={{ width: "250px" }} className="labelSlider labelDate">
            Nombre de software
            <input
              value={textSoft}
              disabled
              type="text"
              placeholder="2010-01"
            />
          </label>

          <label style={{ width: "180px" }} className="labelSlider labelDate">
            Nivel de competencia
            <Select
              indexZ={"25"}
              options={[
                { name: "Básico", id: "basico" },
                { name: "Intermedio", id: "intermedio" },
                { name: "Avanzado", id: "avanzado" },
              ]}
              _id={"levelSoft"}
            />
          </label>
        </div>

        <button onClick={deleteSkill} className="buttonDelete">
          <img src="./icono-eliminar.png" alt="" />
        </button>
      </div>
    </div>
  );
}
