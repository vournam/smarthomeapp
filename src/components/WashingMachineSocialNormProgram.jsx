import React from "react";
import ProgramSocialNorm from "./ProgramSocialNorm";

const WashingMachineSocialNormProgram = (props) => {

  const info = [`60°C ${"\u00A0"} 500 στοφές/λεπτό ${"\u00A0"} 80’`, `40°C ${"\u00A0"} 500 στοφές/λεπτό ${"\u00A0"} 95’`, `90°C ${"\u00A0"} 600 στοφές/λεπτό ${"\u00A0"} 65’`, `50°C ${"\u00A0"} 500 στοφές/λεπτό ${"\u00A0"} 85’`, `70°C ${"\u00A0"} 600 στοφές/λεπτό ${"\u00A0"} 75’`];
  const question = "Τα παρακάτω προγράμματα είναι κατάλληλα:";
  const variable = "WashingMachineSocialNormProgram";
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const stagesCount = 4;
  const position = 3;

  // console.log(formValues);

  return (
    <ProgramSocialNorm info={info} question={question} variable={variable} nextStep={props.nextStep} formValues={formValues} setFormValues={setFormValues} stagesCount={stagesCount} position={position} />
    );
  };
export default WashingMachineSocialNormProgram;