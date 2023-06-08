import React from "react";
import DirtLevel from "./DirtLevel";

const WahingMachineDirtLevel = (props) => {
  const question = "Πόσο λερωμένα είναι τα ρούχα σας όταν τα βάζετε στο πλυντήριο;";
  const img = ['https://drive.google.com/uc?id=1yvbTv5xAzh_dphdgCUXx2A1qgPgL9YlB', 'https://drive.google.com/uc?id=1mgKVM3jecUMw7D8uMsJsTnF7TpOdXl9H', 'https://drive.google.com/uc?id=1WGgPkT9fBVKG-zbI70wt4ZHnUkDEDR5u'];
  const options = ['Ελαφρώς λερωμένα', 'Μέτρια λερωμένα', 'Έντονα λερωμένα'];
  const variable="WashingMachineDirtLevel";
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const stagesCount = 4;
  const position = 2;
  
  return (
    <DirtLevel question={question} img={img} options={options} nextStep={props.nextStep} variable={variable} formValues={formValues} setFormValues={setFormValues} stagesCount={stagesCount} position={position} />
    );
  };
export default WahingMachineDirtLevel;