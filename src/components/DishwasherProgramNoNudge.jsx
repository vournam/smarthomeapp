import React from "react";
import ProgramNoNudge from "./ProgramNoNudge";

const DishwasherProgramNoNudge = (props) => {

  const info = [`50°C ${"\u00A0"} 58’`, `40°C ${"\u00A0"} 65’`, `60°C ${"\u00A0"} 55’`, `70°C ${"\u00A0"} 50’`, `90°C ${"\u00A0"} 48’`];
  const question = "Τα παρακάτω προγράμματα είναι κατάλληλα:";
  const variable = "DishwasherProgramNoNudge";
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const stagesCount = 3;
  const position = 2;

  return (
    <ProgramNoNudge info={info} question={question} variable={variable} nextStep={props.nextStep} formValues={formValues} setFormValues={setFormValues} stagesCount={stagesCount} position={position} />
    );
  };
export default DishwasherProgramNoNudge;