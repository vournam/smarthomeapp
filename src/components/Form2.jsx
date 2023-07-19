import React, { useState, useRef} from 'react';
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
  const [showPopupAge, setShowPopupAge] = useState(false);
  const scrollRef = useRef(null);

  const handleAgeChange = (event) => {
    const value = event.target.value;
    setAge(event.target.value);
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
    const value = event.target.value;
    // console.log("value:", value);
    setFormValues({
      ...formValues,
      LivingArea: value // Use computed property name to set the value based on the event target's name
    });
  };
  
  const scrollToUnansweredQuestion = () => {
    const unansweredQuestionIndices = [selectedOption1, age, selectedOption2, selectedOption3].reduce(
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
          container.classList.add('unanswered-question');
        } else {
          container.classList.remove('unanswered-question');
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

  // const scrollToUnansweredQuestion = () => {
  //   const unansweredQuestionIndex = [selectedOption1, age, selectedOption2, selectedOption3].findIndex(
  //     (answer) => !answer
  //   );
  
  //   if (unansweredQuestionIndex !== -1) {
  //     const questionContainers = Array.from(scrollRef.current.getElementsByClassName('form-container'));
  //     const unansweredQuestionContainer = questionContainers[unansweredQuestionIndex];
  
  //     const containerTop = scrollRef.current.offsetTop;
  //     const questionTop = unansweredQuestionContainer.offsetTop;
  //     const scrollPosition = containerTop + questionTop;
  
  //     // Apply red border class to the unanswered question container
  //     questionContainers.forEach((container) => {
  //       container.classList.remove('unanswered-question');
  //     });
  //     unansweredQuestionContainer.classList.add('unanswered-question');

  //     window.scrollTo({
  //       top: scrollPosition,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (age && selectedOption1 && selectedOption2 && selectedOption3) {
      if ( (age>0 && age<120) || age === "-") {
        props.nextStep(formValues);
        
      } else {
        setShowPopupAge(true);
        setTimeout(() => {
          setShowPopupAge(false);
          scrollToUnansweredQuestion();
        }, 1700); // Duration as needed (in milliseconds)
        
      }
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
      <div className="form-subheader">Δημογραφικά στοιχεία</div>
      <form method="get" className="questionnaire" name='questionnaire' onSubmit={handleSubmit}>
        <div className="form-container">
          <Question legend={l1} opt1={opta1} opt2={opta2} opt3={opta3} opt4={opta4} selectedOption={selectedOption1} handleOptionChange={handleOptionChange1} />
        </div>
        <div className="form-container">
          <label className="age" htmlFor="age">Ηλικία:</label>
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
      >Παρακαλώ, συμπληρώστε όλα τα πεδία για να συνεχίσετε.</Modal>

      <Modal
        isOpen={showPopupAge}
        onRequestClose={() => setShowPopupAge(false)}
        contentLabel="Terms Popup"
        overlayClassName="modal-overlay"
        className="modal-content"
      >Παρακαλώ, συμπληρώστε ορθά την ηλικία σας για να συνεχίσετε.</Modal>

    </div>
  );
};

export default Form2;
