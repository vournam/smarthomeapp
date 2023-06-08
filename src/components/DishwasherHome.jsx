import React from "react";
import Home from "./Home";

const DishwasherHome = (props) => {
  const header="Πλυντήριο Πιάτων";
  const img="https://drive.google.com/uc?id=1wvVJJSuHQWFYu0Krc8XgNhXu8qXLXEjv";

  return (
    <Home header={header} img={img} nextStep={props.nextStep}/>
    );
  };
export default DishwasherHome;