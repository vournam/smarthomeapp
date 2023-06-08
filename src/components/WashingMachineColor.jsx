import React from "react";
import DirtLevel from "./DirtLevel";

const WashingMachineColor = (props) => {
  const question = "Τι χρώματα βάζετε στο πλυντήριο ρούχων σας;";
  const img = ['https://drive.google.com/uc?id=1aLT2omz9LS8ybwJ_8vw4vro4QxcJ51sS', 'https://drive.google.com/uc?id=1NUb4yoLDKwfbmuIp9lQMSkRl7mlHoxZN', 'https://drive.google.com/uc?id=1BEp-CmFeviwWsCICWIlNNe8aaECcSKDT'];
  const options = ['Λευκά', 'Χρωματιστά', 'Σκούρα'];
  const variable = "WashingMachineColor";
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const stagesCount = 4;
  const position = 1;

  return (
    <DirtLevel question={question} img={img} options={options} nextStep={props.nextStep} variable={variable} formValues={formValues} setFormValues={setFormValues} stagesCount={stagesCount} position={position} />
    );
  };
export default WashingMachineColor;