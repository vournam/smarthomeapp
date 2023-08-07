import React, { useState, useRef, useEffect } from 'react';
import { Button } from "react-bootstrap";
import Modal from "react-modal";
import "./style.css";

const Form1 = (props) => {
  const formValues = props.formValues;
  const [isChecked, setIsChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const scrollRef = useRef(null);

  const handleChange = () => {
    setIsChecked(!isChecked);
    setShowPopup(false);
  };

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
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

  useEffect(() => {
    if (showPopup) {
      scrollToTop();
    }
  }, [showPopup]);

  return (
    <div className="background" ref={scrollRef}>
      <div className="form-container img-container">
        <img className="form-img" alt="" src="https://drive.google.com/uc?id=1kFLAA3IB0ufY5hvtU0bcidgnhMyIxfCe" />
      </div>
      <div className="form-container">
        <div className="form-header">Ερωτηματολόγιο Διπλωματικής Εργασίας</div>
        <p className="form-p">Το παρόν ερωτηματολόγιο αποτελεί μέρος του πειράματος που διεξάγεται στα πλαίσια εκπόνησης  διπλωματικής εργασίας του μεταπτυχιακού "Human-Computer Interaction (HCI)" των Τμημάτων Μηχανικών Η/Υ και Πληροφορικής &amp; Ηλεκτρολόγων Μηχανικών και Τεχνολογίας Υπολογιστών του Πανεπιστημίου Πατρών.</p>
        <p className="form-p">Οι ερωτήσεις που ακολουθούν απευθύνονται αποκλειστικά σε όσους επιθυμούν να συμμετέχουν στο πείραμα.</p>
        <p className="italic form-p instruct-note">Eκτιμώμενος χρόνος ολοκλήρωσης ερωτηματολογίου: 1-2 λεπτά</p>
      </div>
      <div className="form-container last">
        <div className="form-header">Επεξεργασία Προσωπικών Δεδομένων</div>
        <p className="form-p">Eπιτρέπω στο Πανεπιστήμιο Πατρών προσωπικά μου δεδομένα να μπορούν να συσχετιστούν με το υλικό της έρευνας και για τις ανάγκες υλοποίησής της.</p>
        <p className="form-p">Ενημερώνομαι ότι δεν θα υπάρξει καμία συσχέτιση των δεδομένων με το όνομά μου και ότι όλα τα δεδομένα θα γίνουν ανώνυμα αμέσως μετά την επεξεργασία τους.</p>
        <p className="italic form-p instruct-note">Η συναίνεση παρέχεται σύμφωνα με το άρθρο 57 του Αστικού Κώδικα και του Γενικού Κανονισμού 2016/679 του Ευρωπαϊκού Κοινοβουλίου και Συμβουλίου για αόριστο χρόνο. Γίνεται μνεία ότι διατηρώ δικαίωμα ανάκλησης ή μερικής τροποποίησης του δικαιώματος και των προσωπικών δεδομένων που παρέχω.</p>
        <form method="get" className="questionnaire" name='questionnaire' onSubmit={handleSubmit}>
          <div className="accept">
            <input
              type="checkbox"
              name="accept-terms"
              onChange={handleChange}
              checked={isChecked} />
              <label className="form-p bold accept-label" htmlFor="accept-terms">Αποδοχή</label>
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
      >Παρακαλώ, αποδεχτείτε τους όρους για να συνεχίσετε.</Modal>
    </div>
  );
};

export default Form1;
