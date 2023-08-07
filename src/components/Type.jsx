import React, {useState, useRef, useEffect} from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import Modal from "react-modal";

const Type = (props) => {

  const formValues = props.formValues;
  const setFormValues = props.setFormValues;
  const [showPopup, setShowPopup] = useState(false);
  const scrollRef = useRef(null);
  const [selectedOptionIndexes, setSelectedOptionIndexes] = useState([]);

  const handleChange = (event) => {
    const { checked, value, id } = event.target;
    let newDishwasherDishType = formValues.DishwasherDishType.slice(); // Create a copy of the array
  
    if (checked) {
      newDishwasherDishType.push(value);
      const selectedIndex = parseInt(id.split('_')[2], 10);
      setSelectedOptionIndexes([...selectedOptionIndexes, selectedIndex]);
    } else {
      newDishwasherDishType = newDishwasherDishType.filter((type) => type !== value);
      const selectedIndex = parseInt(id.split('_')[2], 10);
      setSelectedOptionIndexes(selectedOptionIndexes.filter((index) => index !== selectedIndex));
    }
  
    setFormValues({
      ...formValues,
      DishwasherDishType: newDishwasherDishType,
    });
  };
  

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (showPopup) {
      scrollToTop();
    }
  }, [showPopup]);

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
      <div className="background" ref={scrollRef}>
        <div className="header">Επιλογή προγράμματος</div>
        <div className="stages">
          {stagesClasses.map((className, index) => (
            <div key={index} className={className} />
          ))}
        </div>
        <p className="question">{props.question}</p>
        <form className="options" method="get" name="DishwasherDishType" onSubmit={handleSubmit} >
          {props.options.map((option, index) => ( 
            <div className={ `dish-type-checkbox${index} dish-type`} key={option} >  
              <div className={`container ${selectedOptionIndexes.includes(index) ? 'selected' : ''}`}>
                <img className="dish-type-icon" alt="" src={props.img[index]} />
                <label className="dish-type-label" htmlFor={`checkbox_DishwasherDishType_${index}`}> {option}</label>
                <input 
                  type="checkbox"
                  name = "DishwasherDishType"
                  value={option}
                  onChange={handleChange}
                  checked={formValues.DishwasherDishType.includes(`${option}`)}
                  id={`checkbox_DishwasherDishType_${index}`}
                />
              </div>
              <hr />
            </div>
          ))}
        </form>
        <Button className="next" type="submit" onClick={handleSubmit} > 
        Επόμενο
        </Button>

      <Modal
        isOpen={showPopup}
        onRequestClose={() => setShowPopup(false)}
        contentLabel="Terms Popup"
        overlayClassName="modal-overlay"
        className="modal-content"
      >Παρακαλώ, πραγματοποιήστε τουλάχιστον μία επιλογή για να συνεχίσετε.</Modal>
    </div>
  );
};

export default Type;