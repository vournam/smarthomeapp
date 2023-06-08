import React from "react";
import ProgramEcoSymbol from "./ProgramEcoSymbol";

const DishwasherProgram = (props) => {

const info = [`200°C ${"\u00A0"} γκριλ ${"\u00A0"} 55’`, `160°C ${"\u00A0"} θερμός αέρας ${"\u00A0"} 135’`, `180°C ${"\u00A0"} πάνω/κάτω αντίστ. ${"\u00A0"} 95’`, `170°C ${"\u00A0"} θερμός αέρας ${"\u00A0"} 115’`, `190°C ${"\u00A0"} γκριλ με αέρα ${"\u00A0"} 75’`];
const img = ['', 'https://drive.google.com/uc?id=1oaSYslvUd_TSbv9I6OJgH_Vl8NmWzX-6', '', '', ''];
const question = "Τα παρακάτω προγράμματα είναι κατάλληλα:";
const variable = "DishwasherProgram";    
const formValues = props.formValues;
const setFormValues = props.setFormValues;
const stagesCount = 3;
const position = 2;

  return (
    <ProgramEcoSymbol info={info} img={img} question={question} variable={variable} nextStep={props.nextStep} formValues={formValues} setFormValues={setFormValues} stagesCount={stagesCount} position={position} />
    );
  };
export default DishwasherProgram;