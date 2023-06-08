import React from "react";
import ProgramEcoSymbol from "./ProgramEcoSymbol";

const DishwasherEcoProgram = (props) => {

  const info = [`50°C ${"\u00A0"} 100’`, `40°C ${"\u00A0"} 120’`, `60°C ${"\u00A0"} 80’`, `70°C ${"\u00A0"} 60’`, `90°C ${"\u00A0"} 40’`];
  const img = ['', 'https://drive.google.com/uc?id=1oaSYslvUd_TSbv9I6OJgH_Vl8NmWzX-6', '', '', ''];
  const question = "Τα παρακάτω προγράμματα είναι κατάλληλα:";
  const variable = "DishwasherEcoProgram";
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const stagesCount = 3;
  const position = 2;

  return (
    <ProgramEcoSymbol info={info} img={img} question={question} variable={variable} nextStep={props.nextStep} formValues={formValues} setFormValues={setFormValues} stagesCount={stagesCount} position={position} />
    );
  };
export default DishwasherEcoProgram;