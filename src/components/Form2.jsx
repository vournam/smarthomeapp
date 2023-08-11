import React, { useState, useRef} from 'react';
import { Button } from "react-bootstrap";
import "./style.css";
import Question from "./Question";
import Modal from "react-modal";

const Form2 = (props) => {

  const l1 = "Αυτοπροσδιορίζεστε ως: (*)";
  const options1=["Άνδρας", "Γυναίκα", "Μη δυαδικό", "Δεν γνωρίζω/επιθυμώ να απαντήσω"];
  const l2 = `Ποιος είναι ο υψηλότερος βαθμός ή το επίπεδο του σχολείου που έχετε ολοκληρώσει; Εάν είστε ήδη εγγεγραμμένοι, λαμβάνεται ως ο υψηλότερος βαθμός. (*)`;
  const options2=["Δεν ολοκληρώθηκε καμία εκπαίδευση", "Απόφοιτος Δημοτικού", "Απόφοιτος Γυμνασίου", "Απόφοιτος Λυκείου", "Πτυχίο Πανεπιστημίου", "Μεταπτυχιακό", "Διδακτορικό", "Δεν γνωρίζω/επιθυμώ να απαντήσω"];
  const l3 = "Ποιο από αυτά περιγράφει καλύτερα πού ζείτε; (*)";
  const options3=["Πόλη", "Προάστιο πόλης", "Αγροτική", "Δεν γνωρίζω/επιθυμώ να απαντήσω"];

  const [age, setAge] = useState('');
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);

  const [showPopup, setShowPopup] = useState(false);
  const scrollRef = useRef(null);
  const [selectedOptionIndex1, setSelectedOptionIndex1] = useState(null);
  const [selectedOptionIndex2, setSelectedOptionIndex2] = useState(null);
  const [selectedOptionIndex3, setSelectedOptionIndex3] = useState(null);

  const handleOptionChange3 = (event) => {
    setSelectedOption3(event.target.value);
    const value = event.target.value;
    // console.log("value:", value);

    const selectedIndex = parseInt(event.target.id);
    setSelectedOptionIndex3(selectedIndex);
    
    setFormValues({
      ...formValues,
      LivingArea: value // Use computed property name to set the value based on the event target's name
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
      Education: value // Use computed property name to set the value based on the event target's name
    });

  };

  const handleAgeChange = (event) => {
    const value = event.target.value;
    const numericValue = parseInt(value, 10); // Convert value to a number

    setAge(numericValue); // Store the numeric value in the state
    console.log("value:", numericValue);
    setFormValues({
      ...formValues,
      Age: numericValue
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
      Gender: value // Use computed property name to set the value based on the event target's name
    });
  };

  const scrollToUnansweredQuestion = () => {

    const unansweredQuestionIndices = [];
    if (!selectedOption1) {
      unansweredQuestionIndices.push(0);
    }
    if (!age || age < 10 || age > 100) {
      unansweredQuestionIndices.push(1);
    }
    if (!selectedOption2) {
      unansweredQuestionIndices.push(2);
    }
    if (!selectedOption3) {
      unansweredQuestionIndices.push(3);
    }

    console.log('unansweredQuestionIndices', unansweredQuestionIndices);
  
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
  
    const unansweredQuestions = [selectedOption1, selectedOption2, selectedOption3, age].reduce(
      (acc, answer, index) => {
        if (!answer) {
          acc.push(index);
        }
        return acc;
      },
      []
    );
  
    const invalidAge = (age < 10 || age > 100);
  
    if (unansweredQuestions.length > 0 || invalidAge) {
      console.log('unansweredQuestions:', unansweredQuestions, 'faulty age:',invalidAge);
      setShowPopup(true);
      setTimeout(() => {
        scrollToUnansweredQuestion();
        setShowPopup(false);
      }, 1700); // Duration as needed (in milliseconds)
    }
    else {
      props.nextStep(formValues);
    }
  };

  const handleKeyPress = (e) => {
    const charCode = e.charCode;
    // Allow only numeric characters (0-9) or the Backspace key (8)
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  return (
    <div className="background" ref={scrollRef}>
      <div className="form-subheader">Δημογραφικά στοιχεία</div>
      <form method="get" className="questionnaire" name='questionnaire' onSubmit={handleSubmit}>
        <p className="mandatory">Οι ερωτήσεις με (*) είναι υποχρεωτικές.</p>
        <div  className="form-container">
          <Question legend={l1} options={options1} selectedOption={selectedOption1} handleOptionChange={handleOptionChange1} selectedOptionIndex={selectedOptionIndex1} />
        </div>
        <div className="form-container">
          <label className="age" htmlFor="age">Ηλικία: (*)</label>
          <input
          type="text"
          id="age"
          value={age}
          onChange={handleAgeChange}
          onKeyPress={handleKeyPress}
        />
        </div>
        <div className="form-container">
          <Question legend={l2} options={options2} selectedOption={selectedOption2} handleOptionChange={handleOptionChange2} selectedOptionIndex={selectedOptionIndex2} />
        </div>
        <div className="form-container last">
          <Question legend={l3} options={options3} selectedOption={selectedOption3} handleOptionChange={handleOptionChange3} selectedOptionIndex={selectedOptionIndex3} />
        </div>
      </form>
      <Button type="submit" className="next" onClick={handleSubmit} >Επόμενο</Button> 

      <Modal
        isOpen={showPopup}
        onRequestClose={() => setShowPopup(false)}
        contentLabel="Terms Popup"
        overlayClassName="modal-overlay"
        className="modal-content"
      >Παρακαλώ, συμπληρώστε όλα τα υποχρεωτικά πεδία ή διορθώστε την ηλικία σας.</Modal>
    </div>
  );
};

export default Form2;