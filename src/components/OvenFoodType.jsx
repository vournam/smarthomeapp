import React from "react";
import DirtLevel from "./DirtLevel";

const OvenFoodType = (props) => {
  
  const question = "Τι είδους φαγητό/γεύμα ψήνετε στο φούρνο σας;";
  const options = ['Κρέας', 'Πουλερικά', 'Ψάρι', 'Ψωμιά & ζύμες', 'Ζυμαρικά', 'Κατεψυγμένα', 'Συνοδευτικά', 'Γλυκά'];
  const img = ['https://drive.google.com/uc?id=10qq-ztlSHKAGS2vbZ6-B3EkNntnzDTCS', 'https://drive.google.com/uc?id=1_dZX67gnsKbmT06aaj7qftjBOCzlKWXL', 'https://drive.google.com/uc?id=1SE0Anzge6Mxe9hIq_ynGWR35K1Gu1be0', 'https://drive.google.com/uc?id=1AA_L69TyR_ZM-jenb1VAfyEiRO7pdNzU', 'https://drive.google.com/uc?id=1epuTWV6LVRi-b8b2Q2AtIDChvt5Zea7N', 'https://drive.google.com/uc?id=1dz_5yvuWNJjr8D1N6degZaOPA8FGUsBM', 'https://drive.google.com/uc?id=156TG-WAk5R04CsMH9sZ7T05KaVazVKtw', 'https://drive.google.com/uc?id=12swOBqWYLaH6FMID6hsP7xylSPtAbS1_'];
  const variable="OvenFoodType";
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const stagesCount = 3;
  const position = 0;

  return (
    <DirtLevel question={question} img={img} options={options} nextStep={props.nextStep} variable={variable} formValues={formValues} setFormValues={setFormValues} stagesCount={stagesCount} position={position} />
    );
  };
export default OvenFoodType;