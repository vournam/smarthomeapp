import React, {useState } from 'react';
import "./style.css";

const Question8 = (props) => {

    const legend = props.legend;
    const opt1 = props.opt1;
    const opt2 = props.opt2;
    const opt3 = props.opt3;
    const opt4 = props.opt4;
    const opt5 = props.opt5;
    const opt6 = props.opt6;
    const opt7 = props.opt7;
    const opt8 = props.opt8;
    const selectedOption = props.selectedOption;
    const handleOptionChange = props.handleOptionChange;

    return (
        <fieldset>
            <legend>{legend}</legend>
            <label>
                <input
                type="radio"
                value={`${opt1}`}
                checked={selectedOption === `${opt1}`}
                onChange={handleOptionChange}
                />
                {opt1}
            </label>
            <br />
            <label>
                <input
                type="radio"
                value={`${opt2}`}
                checked={selectedOption === `${opt2}`}
                onChange={handleOptionChange}
                />
                {opt2}
            </label>
            <br />
            <label>
                <input
                type="radio"
                value={`${opt3}`}
                checked={selectedOption === `${opt3}`}
                onChange={handleOptionChange}
                />
                {opt3}
            </label>
            <br />
            <label>
                <input
                type="radio"
                value={`${opt4}`}
                checked={selectedOption === `${opt4}`}
                onChange={handleOptionChange}
                />
                {opt4}
            </label>
            <br />
            <label>
                <input
                type="radio"
                value={`${opt5}`}
                checked={selectedOption === `${opt5}`}
                onChange={handleOptionChange}
                />
                {opt5}
            </label>
            <br />
            <label>
                <input
                type="radio"
                value={`${opt6}`}
                checked={selectedOption === `${opt6}`}
                onChange={handleOptionChange}
                />
                {opt6}
            </label>
            <br />
            <label>
                <input
                type="radio"
                value={`${opt7}`}
                checked={selectedOption === `${opt7}`}
                onChange={handleOptionChange}
                />
                {opt7}
            </label>
            <br />
            <label>
                <input
                type="radio"
                value={`${opt8}`}
                checked={selectedOption === `${opt8}`}
                onChange={handleOptionChange}
                />
                {opt8}
            </label>
        </fieldset>
    );

}

export default Question8;