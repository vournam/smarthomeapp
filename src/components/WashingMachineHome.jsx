import React from "react";
import Home from "./Home";

const WashingMachineHome = (props) => {
  const header="Πλυντήριο Ρούχων";
  const img="https://drive.google.com/uc?id=1mhwTuM_hvzCGclAtKZEqniGsEawcrotB";
  return (
    <Home header={header} img={img} nextStep={props.nextStep} />
    );
  };
export default WashingMachineHome;