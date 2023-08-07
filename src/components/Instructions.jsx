import React from 'react';
import { Button } from "react-bootstrap";
import "./style.css";

const Instructions = (props) => {

    const formValues = props.formValues;

    const handleSubmit = () => {
        props.nextStep(formValues);
      };

    return (
        <div className="progress-background">
            <p className="form-subheader">ΟΔΗΓΙΕΣ ΠΕΙΡΑΜΑΤΟΣ</p>
            <div className="instructions-p">
                <ol>
                    <li>
                    <span className="step-icon">1</span>
                    <p>Στο πείραμα που ακολουθεί θα εμφανιστούν διαδοχικά τρεις οικιακές συσκευές μιας εφαρμογής έξυπνου σπιτιού (Smart Home application).</p>
                    </li>
                    <li>
                    <span className="step-icon">2</span>
                    <p>
                        Για κάθε συσκευή, επιλέξτε ένα πρόγραμμα και πατήστε "Επόμενο".
                    </p>
                    <p className="caution-text">
                        Λάβετε υπόψη πως μετά την επιλογή "Επόμενο" δεν μπορείτε να επιστρέψετε πίσω για να αλλάξετε την επιλογή σας.
                    </p>
                    </li>
                </ol>
                <p className="italic instruct-note">
                    Εκτιμώμενος χρόνος ολοκλήρωσης πειράματος: 2-3 λεπτά
                </p>
            </div>

            {/* <div className="instructions-p">
                <div className="instructions-border">
                    <p>Στο πείραμα που ακολουθεί θα εμφανιστούν διαδοχικά τρεις οικιακές συσκευές μιας εφαρμογής έξυπνου σπιτιού (Smart Home Application).</p>
                    <p>Σε κάθε συσκευή καλείστε να επιλέξετε ένα πρόγραμμα.</p>
                </div>
            </div>
            <div className="instructions-p">
                <div className="instructions-border">
                    <p>Κατά την επιλογή σας, όταν πατήσετε το κουμπί "Συνέχεια", πρέπει να λάβετε υπόψη ότι δεν θα μπορείτε να επιστρέψετε πίσω και να αλλάξετε την επιλογή που κάνατε.</p>
                    <p>Αυτό σημαίνει ότι θα πρέπει να είστε σίγουροι για την επιλογή σας πριν συνεχίσετε.</p>
                    <p className="instruct-text">Σε περίπτωση που δεν είστε εξοικειωμένοι με τον τρόπο λειτουργίας κάποιας εκ των συσκευών, συνιστάται να επιλέξετε το πιο πιθανό πρόγραμμα που ανταποκρίνεται στις προτιμήσεις σας.</p>
                    <p className="italic instruct-note">Eκτιμώμενος χρόνος ολοκλήρωσης πειράματος: 2-3 λεπτά</p>
                </div>
            </div> */}
            <Button type="submit" className="next" onClick={handleSubmit} >Έναρξη</Button> 
        </div>
    );
};

export default Instructions;