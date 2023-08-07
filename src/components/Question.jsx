import React from 'react';
import "./style.css";

const Question = (props) => {

  const legend = props.legend;
  const options = props.options;
  const selectedOption = props.selectedOption;
  const handleOptionChange = props.handleOptionChange;
  const selectedOptionIndex = props.selectedOptionIndex;

  return (
    <fieldset>
      <legend>{legend}</legend>
      {options.map((option, index) => (
        <React.Fragment key={index}>
          <label className={`radio-label ${selectedOptionIndex === index ? 'selected' : ''}`}>
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              id={index}
            />
            {option}
          </label>
          <br />
        </React.Fragment>
      ))}
    </fieldset>      
  );

}

export default Question;