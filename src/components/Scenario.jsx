import React, { useState, useEffect } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

const Scenario = (props) => {

  const Page1 = props.page1;
  const Page2 = props.page2;  
  const Page3 = props.page3;
  const Page4 = props.page4;
  const Page5 = props.page5;
  const Page6 = props.page6;
  const Page7 = props.page7;
  const Page8 = props.page8;
  const Page9 = props.page9;
  const Page10 = props.page10;
  const Page11 = props.page11;
  const Page12 = props.page12;
  const Page13 = props.page13;
  const Page14 = props.page14;
  const Page15 = props.page15;
  const Page16 = props.page16;
  const scenario = props.scenario;
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  // console.log('formValues-Scenario', formValues);

  const [step, setStep] = useState(1);
  // console.log('step:', step);
  
  const nextStep = (values) => {
    setFormValues({ ...formValues, ...values });
    setStep(step + 1);
    if (step === 19) {
      props.store();
      setStep(1);
    }
  };

  switch (step) {
    case 1:
    return (
      <Form1
        nextStep={nextStep}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    );
    case 2:
    return (
      <Form2
        nextStep={nextStep}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    );
    case 3:
    return (
      <Form3
        nextStep={nextStep}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    );
    case 4:
      return (
        <Page1
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 5:
      return (
        <Page2
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 6:
      return (
        <Page3
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 7:
      return (
        <Page4
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 8:
      return (
        <Page5
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 9:
      return (
        <Page6
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 10:
      return (
        <Page7
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 11:
      return (
        <Page8
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 12:
      return (
        <Page9
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 13:
      return (
        <Page10
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 14:
      return (
        <Page11
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 15:
      return (
        <Page12
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 16:
      return (
        <Page13
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 17:
      return (
        <Page14
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 18:
      return (
        <Page15
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 19:
      return (
        <Page16
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    default:
    return (
      <Form1
      nextStep={nextStep}
      formValues={formValues}
      setFormValues={setFormValues}
    />
    );
  }
};

export default Scenario;
