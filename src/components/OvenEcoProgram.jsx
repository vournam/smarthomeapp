import React from "react";
import ProgramEcoSymbol from "./ProgramEcoSymbol";

const OvenEcoProgram = (props) => {

const info = [`200°C ${"\u00A0"} γκριλ ${"\u00A0"} 54’`, `160°C ${"\u00A0"} θερμός αέρας ${"\u00A0"} 85’`, `180°C ${"\u00A0"} πάνω/κάτω αντίστ. ${"\u00A0"} 64’`, `170°C ${"\u00A0"} θερμός αέρας ${"\u00A0"} 72’`, `190°C ${"\u00A0"} γκριλ με αέρα ${"\u00A0"} 58’`];
const question = "Τα παρακάτω προγράμματα είναι κατάλληλα:";
const variable = "OvenEcoProgram";    
const formValues = props.formValues;
const setFormValues = props.setFormValues;
const stagesCount = 3;
const position = 2;

  return (
    <ProgramEcoSymbol info={info} question={question} variable={variable} nextStep={props.nextStep} formValues={formValues} setFormValues={setFormValues} stagesCount={stagesCount} position={position} />
    );
  };
export default OvenEcoProgram;