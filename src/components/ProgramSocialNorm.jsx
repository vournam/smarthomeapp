import React, {useState} from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import Modal from "react-modal";

const ProgramEcoSymbol = (props) => {

  const options = ['Πρόγραμμα 1', 'Πρόγραμμα 2', 'Πρόγραμμα 3', 'Πρόγραμμα 4', 'Πρόγραμμα 5'];

  const varProp = props.variable;
  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
    setFormValues({
      ...formValues,
      [name]: value // Use computed property name to set the value based on the event target's name
    });
  };

  const handleSubmit = (event) => {
    for (const property in formValues) {
      // const value = formValues[property];
      if (property === varProp) {
        // console.log('property=',property,'formValues[property]=',formValues[property],'formValues[property] == null=',formValues[property] == "");
        if (formValues[property] === "") {
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
          }, 1700); // Duration as needed (in milliseconds)
        }
        else {  
          event.preventDefault();
          props.nextStep(formValues);
          setFormValues({
            ...formValues,
            [event.target.name]: ""
          });
        }
      }
    }
  };

  const stagesCount = props.stagesCount; // Number of stages
  const position = props.position; // Position of 'stages-child' className
  const stagesClasses = Array.from({ length: stagesCount }, (_, index) => // Array of all stages
    index === position ? 'stages-child' : 'stages-item'
  );
  
  return (
    <div className="background">
      <div className="header">Επιλογή προγράμματος</div>
      <div className="stages">
        {stagesClasses.map((className, index) => (
          <div key={index} className={className} />
        ))}
      </div>
      <p className="question">{props.question}</p>
      <div className="socialnorm-text">
        <img className="socialnorm-text-icon" alt="" src="https://drive.google.com/uc?id=19a9jWaIIS3I3_TwBolmcNmW7dqj8HXhj" />
        <p>52.5% χρηστών με παρόμοιες επιλογές προτιμούν το Πρόγραμμα 2.</p>
      </div>
      <form className="options" method="get" name={`${varProp}`} onSubmit={handleSubmit}>
        {options.map((option, index) => (
          <div className={`eco-program-selection${index}`} key={option}>  
            <div className="container"> 
              <label className="eco-program-selection-label" htmlFor={`${varProp}`} > 
                {option}
                <div className="info">{props.info[index]} </div>
              </label>
              <input
                type="radio"
                name = {`${varProp}`}
                value={option}     
                onChange={handleChange}
                checked={formValues[varProp]  === `${option}`}
              />
            </div>
            <hr />
          </div>
        ))}
      </form>
      <Button type="submit" className="next" onClick={handleSubmit}> {/*must get disabled */}
      Έναρξη
      </Button>

      <Modal
        isOpen={showPopup}
        onRequestClose={() => setShowPopup(false)}
        contentLabel="Terms Popup"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h4 className="modal-h4">Παρακαλώ επιλέξτε μία επιλογή για να συνεχίσετε.</h4>
      </Modal>

    </div>
  );
};

export default ProgramEcoSymbol;