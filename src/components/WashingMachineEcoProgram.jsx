import React from "react";
import ProgramEcoSymbol from "./ProgramEcoSymbol";

const WashingMachineEcoProgram = (props) => {

  const info = [`60°C ${"\u00A0"} 500 στοφές/λεπτό ${"\u00A0"} 97’`, `40°C ${"\u00A0"} 500 στοφές/λεπτό ${"\u00A0"} 137’`, `50°C ${"\u00A0"} 500 στοφές/λεπτό ${"\u00A0"} 119’`, `90°C ${"\u00A0"} 600 στοφές/λεπτό ${"\u00A0"} 79’`, `70°C ${"\u00A0"} 600 στοφές/λεπτό ${"\u00A0"} 87’`];  
  const question = "Τα παρακάτω προγράμματα είναι κατάλληλα:";
  const variable="WashingMachineEcoProgram";
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const stagesCount = 4;
  const position = 3;
    
  return (
    <ProgramEcoSymbol info={info} question={question} variable={variable} nextStep={props.nextStep} formValues={formValues} setFormValues={setFormValues} stagesCount={stagesCount} position={position} />
    );
  };
export default WashingMachineEcoProgram;