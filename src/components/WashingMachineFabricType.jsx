import React from "react";
import DirtLevel from "./DirtLevel";

const WashingMachineFabricType = (props) => {
  
  const question = "Ποιο ύφασμα βάζετε στο πλυντήριο ρούχων σας;";
  const options = ['Βαμβακερά', 'Συνθετικά', 'Μεικτά', 'Μάλλινα', 'Μεταξωτά', 'Ευαίσθητα', 'Αθλητικά / Μικροΐνες', 'Σκουρόχρωμα / Jeans'];
  const img = ['https://drive.google.com/uc?id=1J7Wtx9INQ2pbHp0IR__42Ywm4-tlbsto', 'https://drive.google.com/uc?id=1lB1pjNgcFI4vs2mjT7YfJAYxntv1bSZS', 'https://drive.google.com/uc?id=1p9gUhg0g57o7adCD-FiOYFClgJejbJcj', 'https://drive.google.com/uc?id=13sWVPHIMViP206aMpaBFWba1zatoDvP4', 'https://drive.google.com/uc?id=17o7_cF5TkZ0oz2v-XHT0_m8-pMXoBlVl', 'https://drive.google.com/uc?id=1vu0_OmpDNxJBLmQgvebxm7JV6fyBJ7hZ', 'https://drive.google.com/uc?id=1kPAR_x7VX0ApT09g77ftkB3cJ5i0RnGr', 'https://drive.google.com/uc?id=14bCXopIBA1oGc9jtd69PLE4GfI7rVrla'];
  const variable = "WashingMachineFabricType";
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const stagesCount = 4;
  const position = 0;

  return (
    <DirtLevel question={question} img={img} options={options} nextStep={props.nextStep} variable={variable} formValues={formValues} setFormValues={setFormValues} stagesCount={stagesCount} position={position} />
    );
  };
export default WashingMachineFabricType;