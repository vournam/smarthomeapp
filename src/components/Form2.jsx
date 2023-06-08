import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import "./style.css";
import Question from "./Question";
import Question8 from "./Question8";
import Modal from "react-modal";

const Form2 = (props) => {

  const l1 = "Αυτοπροσδιορίζεστε ως:";
  const opta1 = "Άνδρας";
  const opta2 = "Γυναίκα";
  const opta3 = "Μη δυαδικό";
  const opta4 = "Δεν γνωρίζω / επιθυμώ να απαντήσω";
  const l2 = `Ποιος είναι ο υψηλότερος βαθμός ή το επίπεδο του σχολείου που έχετε ολοκληρώσει; Εάν είστε ήδη εγγεγραμμένοι, λαμβάνεται ως ο υψηλότερος βαθμός.`;
  const optb1 = "Δεν ολοκληρώθηκε καμία εκπαίδευση";
  const optb2 = "Απόφοιτος Δημοτικού";
  const optb3 = "Απόφοιτος Γυμνασίου";
  const optb4 = "Απόφοιτος Λυκείου";
  const optb5 = "Πτυχίο Πανεπιστημίου";
  const optb6 = "Μεταπτυχιακό";
  const optb7 = "Διδακτορικό";
  const l3 = "Ποιο από αυτά περιγράφει καλύτερα πού ζείτε;";
  const optc1 = "Πόλη";
  const optc2 = "Προάστιο πόλης";
  const optc3 = "Αγροτική";
  const [age, setAge] = useState('');
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleAgeChange = (event) => {
    setAge(event.target.value);
    const value = event.target.value;
    // console.log("value:", value);
    setFormValues({
      ...formValues,
      Age: value // Use computed property name to set the value based on the event target's name
    });
  };

  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
    const value = event.target.value;
    // console.log("value:", value);
    setFormValues({
      ...formValues,
      Gender: value // Use computed property name to set the value based on the event target's name
    });
  };
  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
    const value = event.target.value;
    // console.log("value:", value);
    setFormValues({
      ...formValues,
      Education: value // Use computed property name to set the value based on the event target's name
    });
  };
  const handleOptionChange3 = (event) => {
    setSelectedOption3(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    // console.log("value:", value);
    setFormValues({
      ...formValues,
      LivingArea: value // Use computed property name to set the value based on the event target's name
    });
  };

  const handleSubmit = () => {
    if (age && selectedOption1 && selectedOption2 && selectedOption3 ) {
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
      <div className="form-subheader">Δημογραφικά στοιχεία</div>
      <form method="get" className="questionnaire" name='questionnaire' onSubmit={handleSubmit}>
        <div className="form-container">
          <Question legend={l1} opt1={opta1} opt2={opta2} opt3={opta3} opt4={opta4} selectedOption={selectedOption1} handleOptionChange={handleOptionChange1} />
        </div>
        <div className="form-container">
          <label className="age" htmlFor="age">Ηλικία</label>
          <input
          type="number"
          value={age}
          onChange={handleAgeChange}
          min={10}
          max={120}
        />
        </div>
        <div className="form-container">
          <Question8 legend={l2} opt1={optb1} opt2={optb2} opt3={optb3} opt4={optb4} opt5={optb5} opt6={optb6} opt7={optb7} opt8={opta4} selectedOption={selectedOption2} handleOptionChange={handleOptionChange2} />
        </div>
        <div className="form-container last">
          <Question legend={l3} opt1={optc1} opt2={optc2} opt3={optc3} opt4={opta4} selectedOption={selectedOption3} handleOptionChange={handleOptionChange3} />
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
