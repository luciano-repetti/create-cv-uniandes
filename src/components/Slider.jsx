import React, { useEffect, useState } from "react";
import Select from "./Select";
import Addition from "./atoms/Addition";
import NewWorkExp from "./NewWorkExperience";
import AddUndergraduate from "./AddUndergraduate";
import InformalCourse from "./InformalAdditionalCourse";
import { Lenguages } from "./AddLanguage";
import { AddSoftware } from "./AddSoftware";
import AddMerit from "./AddMerit";

export function Slider1(props) {
  const slider = props.slider;

  return (
    <div className={`slider ${slider.slider1 ? "default" : "dissable"}`}>
      <div className="containerForm">
        <hr />
        <fieldset>
          <img className="photoLoad" src="./usuario_vacio.png" alt="" />
          <div className="loadPhoto">
            <p style={{ display: "flex" }}>
              <p className="bold">Foto</p>(opcional)
            </p>
            <p className="greyish">600 x 600 recomendado</p>
            <button className="buttonLoad">Cargar ahora</button>
          </div>
        </fieldset>
        <hr />
        <h2>Datos personales</h2>
        <fieldset>
          <label className="labelSlider">
            Nombre y apellido completos
            <input
              tabIndex={0}
              type="text"
              placeholder="Escribe tus datos aquí"
              name=""
            />
          </label>

          <label className="labelSlider">
            correo electronico
            <input
              tabIndex={0}
              type="text"
              placeholder="example@uniandes.edu.co"
              name=""
            />
          </label>
        </fieldset>

        <fieldset>
          <label className="labelSlider">
            URL LinkedIn
            <input
              tabIndex={0}
              type="text"
              placeholder="Escribe tus datos aquí"
              name=""
            />
          </label>

          <label className="labelSlider">
            Celular
            <input
              tabIndex={0}
              type="text"
              placeholder="310 458 6898"
              name=""
            />
          </label>
        </fieldset>

        <fieldset>
          <label className="labelSlider">
            País
            <Select
              indexZ={"25"}
              options={["Colombia", "Argentina", "Chile"]}
              _id={"pais"}
            />
          </label>

          <label className="labelSlider">
            Ciudad
            <Select
              indexZ={"25"}
              options={["Bogotá D.C", "Medellín", "Cartegena"]}
              _id={"ciudad"}
            />
          </label>
        </fieldset>
      </div>
    </div>
  );
}

export function Slider2(props) {
  const slider = props.slider;

  const handleDeleteWorkExp = (index) => {
    setWorkExpForms((prevForms) => {
      const updatedForms = [...prevForms];
      updatedForms.splice(index, 1);
      return updatedForms;
    });
  };

  const [workExpForms, setWorkExpForms] = useState([
    <NewWorkExp key={0} onDelete={handleDeleteWorkExp} />,
  ]);

  const addWorkExpForm = () => {
    const newFormKey = workExpForms.length;
    setWorkExpForms((prevForms) => [
      ...prevForms,
      <NewWorkExp key={newFormKey} onDelete={handleDeleteWorkExp} />,
    ]);
  };

  return (
    <div
      className={`slider ${
        slider.slider2 ? "active" : "" || slider.slider3 ? "dissable" : ""
      }`}
    >
      <div className="containerForm">
        <h2>Perfil profesional</h2>
        <fieldset>
          <label className="labelDescription">
            <textarea
              className="resumeWork"
              placeholder="Resumen ejecutivo corto donde se detalla la formación académica, la Universidad de grado, Idiomas, habilidades o conocimientos y competencias Ej: Análisis, liderazgo, tolerancia a la frustración, adaptabilidad y relacionamiento."
            ></textarea>
          </label>
        </fieldset>

        {workExpForms}
        <Addition
          text={"Adicionar nueva experiencia profesional"}
          onClick={addWorkExpForm}
        />
      </div>
    </div>
  );
}

export function Slider3(props) {
  const slider = props.slider;

  const handleDeleteUndergrate = (index) => {
    setAddUndergraduate((prevForms) => {
      const updatedForms = [...prevForms];
      updatedForms.splice(index, 1);
      return updatedForms;
    });
  };

  const [addUndergraduate, setAddUndergraduate] = useState([
    <AddUndergraduate key={0} onDelete={handleDeleteUndergrate} />,
  ]);

  const changeAddUndergraduate = () => {
    const newFormKey = addUndergraduate.length;
    setAddUndergraduate((prevForms) => [
      ...prevForms,
      <AddUndergraduate key={newFormKey} onDelete={handleDeleteUndergrate} />,
    ]);
  };

  const handleDeleteCourse = (index) => {
    setCourses((prevCourses) => {
      const updatedCourses = [...prevCourses];
      updatedCourses.splice(index, 1);
      return updatedCourses;
    });
  };

  const [courses, setCourses] = useState([]);

  const addCourse = () => {
    const newCourse = {
      id: generateId(),
      text: "Nombre del curso",
      textHeader: "Cursos",
      icono: "icono-curso",
    };
    setCourses((prevCourses) => [...prevCourses, newCourse]);
  };

  const handleDeleteProgram = (index) => {
    setPrograms((prevPrograms) => {
      const updatedPrograms = [...prevPrograms];
      updatedPrograms.splice(index, 1);
      return updatedPrograms;
    });
  };

  const [programs, setPrograms] = useState([]);

  const addProgram = () => {
    const newProgram = {
      id: generateId(),
      text: "Nombre del programa",
      textHeader: "Programas",
      icono: "icono-programa",
    };
    setPrograms((prevPrograms) => [...prevPrograms, newProgram]);
  };

  const handleDeleteSeminar = (index) => {
    setSeminars((prevSeminars) => {
      const updatedSeminars = [...prevSeminars];
      updatedSeminars.splice(index, 1);
      return updatedSeminars;
    });
  };

  const [seminars, setSeminars] = useState([]);

  const addSeminar = () => {
    const newSeminar = {
      id: generateId(),
      text: "Nombre del seminario",
      textHeader: "Seminarios",
      icono: "icono-seminario",
    };
    setSeminars((prevSeminars) => [...prevSeminars, newSeminar]);
  };

  const handleDeleteFeaturedProject = (index) => {
    setFeaturedProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects.splice(index, 1);
      return updatedProjects;
    });
  };

  const [featuredProjects, setFeaturedProjects] = useState([]);

  const addFeaturedProject = () => {
    const newFeaturedProject = {
      id: generateId(),
      text: "Proyecto destacado",
      textHeader: "Proyectos destacados",
      icono: "icono-proyecto",
      desc: "Proyectos de grado o final de carrera son el ejemplo perfecto en este apartado.",
    };
    setFeaturedProjects((prevProjects) => [
      ...prevProjects,
      newFeaturedProject,
    ]);
  };

  const generateId = () => {
    return Date.now();
  };

  return (
    <div
      className={`slider ${
        slider.slider3 ? "active" : "" || slider.slider4 ? "dissable" : ""
      }`}
    >
      <div className="containerForm">
        <h2>Educación</h2>

        {addUndergraduate}

        <Addition
          text={"Adicionar programa"}
          onClick={changeAddUndergraduate}
        />

        <div>
          <h3>Cursos, programas, seminarios y proyectos destacados</h3>
          <fieldset>
            <label className="labelDescription">
              <input
                tabIndex={0}
                type="text"
                placeholder="Lo que has estudiado en Uniandes"
                name=""
              />
            </label>
          </fieldset>
        </div>

        {courses.map((course, index) => (
          <InformalCourse
            key={course.id}
            text={course.text}
            textHeader={course.textHeader}
            icono={course.icono}
            onDelete={() => handleDeleteCourse(index)}
          />
        ))}
        <Addition text={"Adicionar curso"} onClick={addCourse} />

        {programs.map((program, index) => (
          <InformalCourse
            key={program.id}
            text={program.text}
            textHeader={program.textHeader}
            icono={program.icono}
            onDelete={() => handleDeleteProgram(index)}
          />
        ))}
        <Addition text={"Adicionar programa"} onClick={addProgram} />

        {seminars.map((seminar, index) => (
          <InformalCourse
            key={seminar.id}
            text={seminar.text}
            textHeader={seminar.textHeader}
            icono={seminar.icono}
            onDelete={() => handleDeleteSeminar(index)}
          />
        ))}
        <Addition text={"Adicionar seminario"} onClick={addSeminar} />

        {featuredProjects.map((project, index) => (
          <InformalCourse
            key={project.id}
            text={project.text}
            textHeader={project.textHeader}
            icono={project.icono}
            desc={project.desc}
            onDelete={() => handleDeleteFeaturedProject(index)}
          />
        ))}
        <Addition
          text={"Adicionar proyecto destacado"}
          onClick={addFeaturedProject}
        />
      </div>
    </div>
  );
}

export function Slider4(props) {

  return (
    <div className={`slider ${props.slider.slider4 ? "active" : ""}`}>
      <div className="containerForm">
        <h3>Idiomas</h3>
        <Lenguages />
        <hr />
        <AddSoftware />
        <hr />
        <AddMerit />
        <hr />
        <h3>Promedio</h3>
          <label>
            <input style={{width: "180px"}} placeholder="Ej: 4.5" type="text" />
          </label>
        <hr />
        <h3>Conoce más de mi</h3>
        <label>
          <input placeholder="URL video de presentación" type="text" />
        </label>
    </div>
    </div>
  );
}