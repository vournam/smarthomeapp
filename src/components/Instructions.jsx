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
                <div className="instructions-border">
                    <p>Στο πείραμα που ακολουθεί θα εμφανιστούν διαδοχικά τρεις οικιακές συσκευές μιας εφαρμογής έξυπνου σπιτιού (Smart Home Application).</p>
                    <p>Σε κάθε συσκευή καλείστε να επιλέξετε ένα πρόγραμμα.</p>
                    <p>Κατά την επιλογή σας, όταν πατήσετε το κουμπί "Συνέχεια", πρέπει να λάβετε υπόψη ότι δεν θα μπορείτε να επιστρέψετε πίσω και να αλλάξετε την επιλογή που κάνατε.</p>
                    <p>Αυτό σημαίνει ότι θα πρέπει να είστε σίγουροι για την επιλογή σας πριν συνεχίσετε.</p>
                    <p className="instruct-text">Σε περίπτωση που δεν είστε εξοικειωμένοι με τον τρόπο λειτουργίας κάποιας εκ των συσκευών, συνιστάται να επιλέξετε το πιο πιθανό πρόγραμμα που ανταποκρίνεται στις προτιμήσεις σας.</p>
                    <p className="italic instruct-note">Eκτιμώμενος χρόνος ολοκλήρωσης πειράματος: 2-3 λεπτά</p>
                </div>
            </div>
            <Button type="submit" className="next" onClick={handleSubmit} >Έναρξη</Button> 
        </div>
    );
};

export default Instructions;