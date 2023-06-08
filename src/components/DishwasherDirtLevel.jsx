import React from "react";
import DirtLevel from "./DirtLevel";

const DishwasherDirtLevel = (props) => {
  const question = "Πόσο λερωμένα είναι τα πιάτα σας όταν τα βάζετε στο πλυντήριο πιάτων;";
  const img = ['https://drive.google.com/uc?id=1n_1QzfkJNImU54ZbsudX5b0OrJ7Jcl84', 'https://drive.google.com/uc?id=1UmMXqLAGGESAW7r9mo9SavxCDheFvBRv', 'https://drive.google.com/uc?id=1NtRQ0RULG70mJ24yzyjtit919lRa2eTW'];
  const options = ['Ελαφρώς λερωμένα', 'Μέτρια λερωμένα', 'Έντονα λερωμένα'];
  const variable="DishwasherDirtLevel";
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const stagesCount = 3;
  const position = 1;
  

  return (
    <DirtLevel question={question} img={img} options={options} nextStep={props.nextStep} variable={variable} formValues={formValues} setFormValues={setFormValues} stagesCount={stagesCount} position={position} />
    );
  };
export default DishwasherDirtLevel;