import React from "react";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Home = (props) => {
  const navigate = useNavigate();

  const onOption1Click = useCallback(() => {
    props.nextStep();
    navigate("/form");
  }, [navigate]);

  return (
    <div className="background">
      <h1 className="device-header">{props.header}</h1>
      <img
        className="device-icon"
        alt="device"
        src={props.img}
      />
      <div className="programs">

        <h1 className="option-title">ΠΡΟΓΡΑΜΜΑΤΑ</h1>

        <Link to="/form" onClick={onOption1Click} className="option">
          {/* <div > */}
            <div className="option-text option-1">Επιλέξτε πρόγραμμα</div>
            <img
              className="select-icon"
              alt=""
              src="https://drive.google.com/uc?id=1IrHaT-DlIIOs2bR3Owuj2fvQEjWH7JPT"
            />
          {/* </div> */}
        </Link>

        <div className="option">
          <div className="option-text">Πρόσθετες επιλογές</div>
          <img
            className="select-icon"
            alt=""
            src="https://drive.google.com/uc?id=1IrHaT-DlIIOs2bR3Owuj2fvQEjWH7JPT"
          />
        </div>

        <h1 className="option-title">ΩΡΑ ΕΝΑΡΞΗΣ</h1>

        <div className="option">
          <div className="option-text">Επιλέξτε ώρα</div>
          <img
            className="select-icon"
            alt=""
            src="https://drive.google.com/uc?id=1IrHaT-DlIIOs2bR3Owuj2fvQEjWH7JPT"
          />
        </div>

        <h1 className="option-title">ΚΑΘΑΡΙΣΜΟΣ ΣΥΣΚΕΥΗΣ</h1>

        <div className="option">
          <div className="option-text">Επιλέξτε</div>
          <img
            className="select-icon"
            alt=""
            src="https://drive.google.com/uc?id=1IrHaT-DlIIOs2bR3Owuj2fvQEjWH7JPT"
          />
        </div>  

      </div>
    </div>
    );
  };
export default Home;