import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import "./style.css";
import Question from "./Question";
import Modal from "react-modal";

const Form2 = (props) => {

  const l1 = "Πόσες οικιακές συσκευές ελέγχετε μέσω Smart Home εφαρμογής στο κινητό σας;";
  const opta1 = "0";
  const opta2 = "1-2";
  const opta3 = "3-4";
  const opta4 = ">4";
  const l2 = `Πόσο συχνά χρησιμοποιείτε (εσείς αυτοπροσώπως) το πλυντήριο πιάτων κατά τη διάρκεια 1 εβδομάδας;`;
  const l3 = "Πόσο συχνά χρησιμοποιείτε (εσείς αυτοπροσώπως) το πλυντήριο ρούχων κατά τη διάρκεια 1 εβδομάδας;";
  const l4 = "Πόσο συχνά χρησιμοποιείτε (εσείς αυτοπροσώπως) τον φούρνο κατά τη διάρκεια 1 εβδομάδας;";
  const optb1 = "0 φορές";
  const optb2 = "1-2 φορές";
  const optb3 = "3-4 φορές";
  const optb4 = ">4 φορές";
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
    const value = event.target.value;
    // console.log("value:", value);
    setFormValues({
      ...formValues,
      NumberOfSmartHomeApps: value // Use computed property name to set the value based on the event target's name
    });
  };
  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
    const value = event.target.value;
    // console.log("value:", value);
    setFormValues({
      ...formValues,
      DishwasherFreq: value // Use computed property name to set the value based on the event target's name
    });
  };
  const handleOptionChange3 = (event) => {
    setSelectedOption3(event.target.value);
    const value = event.target.value;
    // console.log("value:", value);
    setFormValues({
      ...formValues,
      WashingMachineFreq: value // Use computed property name to set the value based on the event target's name
    });
  };
  const handleOptionChange4 = (event) => {
    setSelectedOption4(event.target.value);
    const value = event.target.value;
    // console.log( "value:", value);
    setFormValues({
      ...formValues,
      OvenFreq: value // Use computed property name to set the value based on the event target's name
    });
  };

  const handleSubmit = () => {
    if (selectedOption1 && selectedOption2 && selectedOption3 && selectedOption4) {
      props.nextStep(formValues);
    }
    else {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1700); // Duration as needed (in milliseconds)
    }
    
  };

  return (
    <div className="background">
      <div className="form-subheader">Smart Home εφαρμογές &amp; συσκευές</div>
      <form method="get" className="questionnaire" name='questionnaire' onSubmit={handleSubmit}>
        <div className="form-container">
          <Question legend={l1} opt1={opta1} opt2={opta2} opt3={opta3} opt4={opta4} selectedOption={selectedOption1} handleOptionChange={handleOptionChange1} />
        </div>
        <div className="form-container">
          <Question legend={l2} opt1={optb1} opt2={optb2} opt3={optb3} opt4={optb4} selectedOption={selectedOption2} handleOptionChange={handleOptionChange2} />
        </div>
        <div className="form-container">
          <Question legend={l3} opt1={optb1} opt2={optb2} opt3={optb3} opt4={optb4} selectedOption={selectedOption3} handleOptionChange={handleOptionChange3} />
        </div>
        <div className="form-container last">
          <Question legend={l4} opt1={optb1} opt2={optb2} opt3={optb3} opt4={optb4} selectedOption={selectedOption4} handleOptionChange={handleOptionChange4} />
        </div>
      </form>
      <Button type="submit" className="next" onClick={handleSubmit} >Επόμενο</Button> 

      <Modal
        isOpen={showPopup}
        onRequestClose={() => setShowPopup(false)}
        contentLabel="Terms Popup"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h4 className="modal-h4">Παρακαλώ συμπληρώστε όλες τις ερωτήσεις για να συνεχίσετε.</h4>
      </Modal>


    </div>
  );
};

export default Form2;
