import React from "react";
import DirtLevel from "./DirtLevel";

const OvenLevel = (props) => {
  const question = "Πόσο ψημένα προτιμάτε τα γεύματά σας στον φούρνο;";
  const img = ['https://drive.google.com/uc?id=1AegTtosw7l8p0Dl0Re5JI0L-StjjOoB2', 'https://drive.google.com/uc?id=1dsq2kaItRlJDye88weV3baPr181XzqfK', 'https://drive.google.com/uc?id=1PB9RDtJapytSYCDBjMfR7WBq_1Vc-mPx'];
  const options = ['Ζουμερά', 'Κανονικά', 'Καλοψημένα'];
  const variable="OvenLevel";
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const stagesCount = 3;
  const position = 1;

  return (
    <DirtLevel question={question} img={img} options={options} nextStep={props.nextStep} variable={variable} formValues={formValues} setFormValues={setFormValues} stagesCount={stagesCount} position={position} />
    );
  };
export default OvenLevel;