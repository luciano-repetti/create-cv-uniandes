import React, { useState } from "react";
import Select from "./Select";
import Addition from "./atoms/Addition";

export function Lenguages() {
  const [languages, setLanguages] = useState([
    {
      id: 0,
      component: (
        <AddLanguage key={0} />
      ),
    },
  ]);

  const addLanguage = () => {
    const newLanguage = {
      id: languages.length,
      component: (
        <AddLanguage
          key={languages.length}
          onDelete={() => handleDeleteLanguage(languages.length)}
        />
      ),
    };
    setLanguages((prevLanguages) => [...prevLanguages, newLanguage]);
  };

  const handleDeleteLanguage = (id) => {
    if (id === 0) {
      return; // No se puede eliminar el primer idioma
    }
    setLanguages((prevLanguages) =>
      prevLanguages.filter((language) => language.id !== id)
    );
  };

  return (
    <>
      {languages.map((language) => (
        <div key={language.id}>{language.component}</div>
      ))}
      <Addition text={"Agregar idioma"} onClick={addLanguage} />
    </>
  );
}

export function AddLanguage({ onDelete }) {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <fieldset style={{ width: "100%" }}>
      <label style={{ width: "65%" }}>
        Idioma
        <Select
          indexZ={"25"}
          options={[
            { name: "Ingles", id: "ingles" },
            { name: "Español", id: "español" },
            { name: "Frances", id: "frances" },
            { name: "Italiano", id: "italiano" },
            { name: "Aleman", id: "aleman" },
          ]}
          _id={"idioma"}
        />
      </label>
      <label style={{ width: "35%" }}>
        Nivel
        <Select
          indexZ={"25"}
          options={[
            { name: "Básico", id: "basico" },
            { name: "Intermendio", id: "intermedio" },
            { name: "Avanzado", id: "avanzado" },
            { name: "Nativo", id: "nativo" },
            { name: "A1", id: "a1" },
            { name: "A2", id: "a2" },
            { name: "B1", id: "b1" },
            { name: "B2", id: "b2" },
            { name: "C1", id: "c1" },
            { name: "C2", id: "c2" },
          ]}
          _id={"idioma"}
        />
      </label>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        {onDelete && (
          <button onClick={handleDelete} className="buttonDelete">
            <img src="./icono-eliminar.png" alt="" />
          </button>
        )}
      </div>
    </fieldset>
  );
}
