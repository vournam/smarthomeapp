import React from "react";
import ProgramEcoSymbol from "./ProgramEcoSymbol";

const WashingMachineEcoProgram = (props) => {

  const info = [`60°C ${"\u00A0"} 700 στοφές/λεπτό ${"\u00A0"} 95’`, `40°C ${"\u00A0"} 500 στοφές/λεπτό ${"\u00A0"} 135’`, `90°C ${"\u00A0"} 600 στοφές/λεπτό ${"\u00A0"} 55’`, `50°C ${"\u00A0"} 500 στοφές/λεπτό ${"\u00A0"} 115’`, `70°C ${"\u00A0"} 400 στοφές/λεπτό ${"\u00A0"} 75’`];
  const img = ['', 'https://drive.google.com/uc?id=1oaSYslvUd_TSbv9I6OJgH_Vl8NmWzX-6', '', '', ''];
  const question = "Τα παρακάτω προγράμματα είναι κατάλληλα:";
  const variable="WashingMachineEcoProgram";
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const stagesCount = 4;
  const position = 3;
    
  return (
    <ProgramEcoSymbol info={info} img={img} question={question} variable={variable} nextStep={props.nextStep} formValues={formValues} setFormValues={setFormValues} stagesCount={stagesCount} position={position} />
    );
  };
export default WashingMachineEcoProgram;