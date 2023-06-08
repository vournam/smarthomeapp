import React from "react";
import ProgramSocialNorm from "./ProgramSocialNorm";

const DishwasherSocialNormProgram = (props) => {

  const info = [`50°C ${"\u00A0"} 100’`, `40°C ${"\u00A0"} 120’`, `60°C ${"\u00A0"} 80’`, `70°C ${"\u00A0"} 60’`, `90°C ${"\u00A0"} 40’`];
  const question = "Τα παρακάτω προγράμματα είναι κατάλληλα:";
  const variable = "DishwasherSocialNormProgram";
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const stagesCount = 3;
  const position = 2;

  return (
    <ProgramSocialNorm info={info} question={question} variable={variable} nextStep={props.nextStep} formValues={formValues} setFormValues={setFormValues} stagesCount={stagesCount} position={position} />
    );
  };
export default DishwasherSocialNormProgram;