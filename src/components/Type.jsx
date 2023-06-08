import React, {useState} from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import Modal from "react-modal";

const Type = (props) => {

  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (event) => {
    let newDishwasherDishType = formValues.DishwasherDishType;
    if (event.target.checked) {
      newDishwasherDishType.push(event.target.value);
    } else {
      newDishwasherDishType = newDishwasherDishType.filter((type) => type !== event.target.value);
    }
    setFormValues({
      ...formValues,
      DishwasherDishType: newDishwasherDishType
    });
  };

  const handleSubmit = (event) => {
    if (formValues.DishwasherDishType.length === 0) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1700); // Duration as needed (in milliseconds)
    } else {  
      event.preventDefault();
      props.nextStep(formValues);
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
        <form className="options" method="get" name="DishwasherDishType" onSubmit={handleSubmit} >
          {props.options.map((option, index) => ( 
            <div className={ `dish-type-checkbox${index}`} key={option} >  
              <div className="container">
                <img className="dish-type-icon" alt="" src={props.img[index]} />
                <label className="dish-type-label" htmlFor="DishwasherDishType"> {option}</label>
                <input 
                  type="checkbox"
                  name = "DishwasherDishType"
                  value={option}
                  onChange={handleChange}
                  checked={formValues.DishwasherDishType.includes(`${option}`)}
                />
              </div>
              <hr />
            </div>
          ))}
        </form>
        <Button className="next" type="submit" onClick={handleSubmit} > {/*must done disabled */}
        Επόμενο
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

export default Type;