import React, { useState, useRef } from 'react';
import { Button } from "react-bootstrap";
import "./style.css";
import Question from "./Question";
import Modal from "react-modal";

const Form3 = (props) => {

  const l1 = "Πόσες οικιακές συσκευές ελέγχετε μέσω Smart Home εφαρμογής στο κινητό σας; (*)";
  const options1 = ["Καμία συσκευή", "1-2 συσκευές", "3-4 συσκευές", "Πάνω από 4 συσκευές", "Δεν γνωρίζω / επιθυμώ να απαντήσω"];
  const l2 = `Πόσο συχνά χρησιμοποιείτε (εσείς αυτοπροσώπως) το πλυντήριο πιάτων κατά τη διάρκεια 1 εβδομάδας; (*)`;
  const l3 = "Πόσο συχνά χρησιμοποιείτε (εσείς αυτοπροσώπως) το πλυντήριο ρούχων κατά τη διάρκεια 1 εβδομάδας; (*)";
  const l4 = "Πόσο συχνά χρησιμοποιείτε (εσείς αυτοπροσώπως) τον φούρνο κατά τη διάρκεια 1 εβδομάδας; (*)";
  const options2 = ["Καμία φορά", "1-2 φορές", "3-4 φορές", "Πάνω από 4 φορές", "Δεν γνωρίζω / επιθυμώ να απαντήσω"];
  const [email, setEmail] = useState('');
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const scrollRef = useRef(null);
  const [selectedOptionIndex1, setSelectedOptionIndex1] = useState(null);
  const [selectedOptionIndex2, setSelectedOptionIndex2] = useState(null);
  const [selectedOptionIndex3, setSelectedOptionIndex3] = useState(null);
  const [selectedOptionIndex4, setSelectedOptionIndex4] = useState(null);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(event.target.value);
    // console.log("value:", value);
    setFormValues({
      ...formValues,
      Email: value // Use computed property name to set the value based on the event target's name
    });
  };

  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
    const value = event.target.value;
    // console.log("value:", value);
    const selectedIndex = parseInt(event.target.id);
    setSelectedOptionIndex1(selectedIndex);
    setFormValues({
      ...formValues,
      NumberOfSmartHomeApps: value // Use computed property name to set the value based on the event target's name
    });
  };
  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
    const value = event.target.value;
    // console.log("value:", value);
    const selectedIndex = parseInt(event.target.id);
    setSelectedOptionIndex2(selectedIndex);
    setFormValues({
      ...formValues,
      DishwasherFreq: value // Use computed property name to set the value based on the event target's name
    });
  };
  const handleOptionChange3 = (event) => {
    setSelectedOption3(event.target.value);
    const value = event.target.value;
    // console.log("value:", value);
    const selectedIndex = parseInt(event.target.id);
    setSelectedOptionIndex3(selectedIndex);
    setFormValues({
      ...formValues,
      WashingMachineFreq: value // Use computed property name to set the value based on the event target's name
    });
  };
  const handleOptionChange4 = (event) => {
    setSelectedOption4(event.target.value);
    const value = event.target.value;
    // console.log( "value:", value);
    const selectedIndex = parseInt(event.target.id);
    setSelectedOptionIndex4(selectedIndex);
    setFormValues({
      ...formValues,
      OvenFreq: value // Use computed property name to set the value based on the event target's name
    });
  };

  const scrollToUnansweredQuestion = () => {
    const unansweredQuestionIndices = [selectedOption1, selectedOption2, selectedOption3, selectedOption4].reduce(
      (acc, answer, index) => {
        if (!answer) {
          acc.push(index);
        }
        return acc;
      },
      []
    );
  
    if (unansweredQuestionIndices.length > 0) {
      const questionContainers = Array.from(scrollRef.current.getElementsByClassName('form-container'));
  
      // Apply red border class to unanswered question containers
      questionContainers.forEach((container, index) => {
        if (unansweredQuestionIndices.includes(index)) {
          container.classList.add('invalid');
        } else {
          container.classList.remove('invalid');
        }
      });
  
      const firstUnansweredQuestionIndex = unansweredQuestionIndices[0];
      const unansweredQuestionContainer = questionContainers[firstUnansweredQuestionIndex];
  
      const containerTop = scrollRef.current.offsetTop;
      const questionTop = unansweredQuestionContainer.offsetTop;
      const scrollPosition = containerTop + questionTop - 100;
  
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };  

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (selectedOption1 && selectedOption2 && selectedOption3 && selectedOption4) {
      props.nextStep(formValues);
    }
    else {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        scrollToUnansweredQuestion();
      }, 1700); // Duration as needed (in milliseconds)
    }
    
  };

  return (
    <div className="background" ref={scrollRef}>
      <div className="form-subheader">Smart Home εφαρμογές &amp; συσκευές</div>
      <form method="get" className="questionnaire" name='questionnaire' onSubmit={handleSubmit}>
        <p className="mandatory">Οι ερωτήσεις με (*) είναι υποχρεωτικές.</p>
        <div className="form-container">
          <Question legend={l1} options={options1} selectedOption={selectedOption1} handleOptionChange={handleOptionChange1} selectedOptionIndex={selectedOptionIndex1} />
        </div>
        <div className="form-container">
          <Question legend={l2} options={options2} selectedOption={selectedOption2} handleOptionChange={handleOptionChange2} selectedOptionIndex={selectedOptionIndex2} />
        </div>
        <div className="form-container">
          <Question legend={l3} options={options2} selectedOption={selectedOption3} handleOptionChange={handleOptionChange3} selectedOptionIndex={selectedOptionIndex3} />
        </div>
        <div className="form-container">
          <Question legend={l4} options={options2} selectedOption={selectedOption4} handleOptionChange={handleOptionChange4} selectedOptionIndex={selectedOptionIndex4} />
        </div>
        <div className="form-container last">
          <label className="email" htmlFor="email">Εάν επιθυμείτε να ενημερωθείτε περαιτέρω σχετικά με το θέμα της διπλωματικής εργασίας καθώς και να λάβετε τα αποτελέσματα που θα προκύψουν, παρακαλούμε αφήστε το email σας ώστε να σας αποστείλουμε τις πληροφορίες.</label>
          <input
          type="email"
          value={email}
          placeholder="Γράψτε το email σας"
          onChange={handleEmailChange}
        />
        </div>
      </form>
      <Button type="submit" className="next" onClick={handleSubmit} >Επόμενο</Button> 
      
      <Modal
        isOpen={showPopup}
        onRequestClose={() => setShowPopup(false)}
        contentLabel="Terms Popup"
        overlayClassName="modal-overlay"
        className="modal-content"
      >Παρακαλώ, συμπληρώστε όλα τα υποχρεωτικά πεδία για να συνεχίσετε.</Modal>

    </div>
  );
};

export default Form3;
