import React from "react";
import Type from "./Type";

const DishwasherDishType = (props) => {
  
  const question = "Ποια αντικείμενα βάζετε στο πλυντήριο πιάτων σας;";
  const options = ['Πιάτα & Μπολ', 'Μαγειρικά σκεύη & Κατσαρόλες', 'Μαχαιροπήρουνα', 'Ποτήρια ποτού', 'Κούπες', 'Ποτήρια Κρασιού', 'Πλαστικά', 'Μεγάλα σκεύη', 'Μπιμπερό'];
  const img = ['https://drive.google.com/uc?id=1PgJ1sUAnAmy37nnbHJoA-Tsr0phXwjQk', 'https://drive.google.com/uc?id=12kNivkj4qzFK3Thae9txhTx3eaPxPWHO', 'https://drive.google.com/uc?id=1jb-A6jlk7VmyCK9iATYbrZVjmmqMaTE3', 'https://drive.google.com/uc?id=1dgVEm_rwoW4hhroa0RJj-ScCV9YZMTal', 'https://drive.google.com/uc?id=1brmpMBu8jaSAjW6i1awG7ndwYMOFI5bG', 'https://drive.google.com/uc?id=1vD6eX-XCSCDFyrneLF0pqNRMoLdH91LD', 'https://drive.google.com/uc?id=1ibWJHLXMCrbfJWkHjh9zEJ-PP1T0aZwC', 'https://drive.google.com/uc?id=1A5PuNo5gSMvUlvPxZXCafz_sv06WdQdg','https://drive.google.com/uc?id=1ja7BCUBK7azCeOGkBqnJHd1ZMXGz-HpG'];
  const variable = "DishwasherDishType";
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const stagesCount = 3;
  const position = 0;

  return (
    <Type question={question} img={img} options={options} nextStep={props.nextStep} variable={variable} formValues={formValues} setFormValues={setFormValues} stagesCount={stagesCount} position={position} />
    );
  };
export default DishwasherDishType;