import React, { useEffect, useRef, useState } from 'react';
import { Button } from "react-bootstrap";
import Modal from "react-modal";
import "./style.css";

const Form1 = (props) => {
  const formValues = props.formValues;
  const [isChecked, setIsChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    setShowPopup(false);
  };

  const handleSubmit = () => {
    if (isChecked) {
      props.nextStep(formValues);
      setShowPopup(false);
    }
    else {
      // alert("Παρακαλώ αποδεχτείτε τους όρους για να συνεχίσετε.");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1700); // Duration as needed (in milliseconds)
    }
    
  };

  return (
    <div className="background">
      <div className="form-container">
        <img className="form-img" alt="" src="https://drive.google.com/uc?id=12C-2pEy1XlYJnY1NJ4CrFvHfei5JzKVE" />
      </div>
      <div className="form-container">
        <div className="form-header">Ερωτηματολόγιο Διπλωματικής Εργασίας</div>
        <p className="form-p">Το παρόν ερωτηματολόγιο αποτελεί μέρος του πειράματος που διεξάγεται στα πλαίσια εκπόνησης  διπλωματικής εργασίας του μεταπτυχιακού "Human-Computer Interaction / HCI" των Τμημάτων Μηχανικών Η/Υ και Πληροφορικής &amp; Ηλεκτρολόγων Μηχανικών και Τεχνολογίας Υπολογιστών του Πανεπιστημίου Πατρών.</p>
        <p className="form-p">Οι ερωτήσεις που ακολουθούν απευθύνονται αποκλειστικά σε όσους επιθυμούν να συμμετέχουν στο πείραμα.</p>
        <p className="italic form-p">Eκτιμώμενος χρόνος ολοκλήρωσης ερωτηματολογίου: 1-2 min.</p>
      </div>
      <div className="form-container last">
        <p className="form-p">Eπιτρέπω στο Πανεπιστήμιο Πατρών προσωπικά μου δεδομένα να μπορούν να συσχετιστούν με το υλικό της έρευνας και για τις ανάγκες υλοποίησής της. Ενημερώνομαι ότι δεν θα υπάρξει καμία συσχέτιση των δεδομένων με το όνομά μου και ότι όλα τα δεδομένα θα γίνουν ανώνυμα αμέσως μετά την επεξεργασία τους.</p>
        <p className="italic form-p">Η συναίνεση παρέχεται σύμφωνα με το άρθρο 57 του Αστικού Κώδικα και του Γενικού Κανονισμού 2016/679 του Ευρωπαϊκού Κοινοβουλίου και Συμβουλίου για αόριστο χρόνο. Γίνεται μνεία ότι διατηρώ δικαίωμα ανάκλησης ή μερικής τροποποίησης του δικαιώματος και των προσωπικών δεδομένων που παρέχω.</p>
        <form method="get" className="questionnaire" name='questionnaire' onSubmit={handleSubmit}>
          <div className="accept">
            <input
              type="checkbox"
              name="accept-terms"
              onChange={handleChange}
              checked={isChecked} />
              <label className="form-p bold" htmlFor="accept-terms">Αποδοχή</label>
          </div>
        </form>
      </div>
      <Button type="submit" className="next" onClick={handleSubmit} >Επόμενο</Button> 

       <Modal
        isOpen={showPopup}
        onRequestClose={() => setShowPopup(false)}
        contentLabel="Terms Popup"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h4 className="modal-h4" >Παρακαλώ αποδεχτείτε τους όρους για να συνεχίσετε.</h4>
      </Modal>
    </div>
  );
};

export default Form1;
