import React from "react";
import Home from "./Home";

const OvenHome = (props) => {
  const header="Φούρνος";
  const img="https://drive.google.com/uc?id=15Tnt7TsMIrXo-goXwTfBDncuJGZGg5r3";

  return (
    <Home header={header} img={img} nextStep={props.nextStep} />
    );
  };
export default OvenHome;