import React from "react";
import ProgramSocialNorm from "./ProgramSocialNorm";

const DishwasherSocialNormProgram = (props) => {

  const info = [`50°C ${"\u00A0"} 135’`, `44°C ${"\u00A0"} 164’`, `60°C ${"\u00A0"} 115’`, `70°C ${"\u00A0"} 95’`, `90°C ${"\u00A0"} 72’`];  
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