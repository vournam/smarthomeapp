import React from 'react';
import "./style.css";

const ThankYou = () => {
  return (
    <div className="progress-background">
      <img className="thankyou-img" alt="" src="https://drive.google.com/uc?id=1gonKen25eP4Lu_Bs71ldCwLhUxObBsNk" />
      <p className="thankyou-text-bold">Σας ευχαριστώ θερμά για τη συμμετοχή σας στο πείραμα.</p>
      <p className="thankyou-text">Ο χρόνος που αφιερώσατε θα μας βοηθήσει να προχωρήσουμε στην ανάλυση και την κατανόηση των δεδομένων.</p>
      <p className="thankyou-text">Αν έχετε οποιεσδήποτε ερωτήσεις ή παρατηρήσεις, μην διστάσετε να επικοινωνήσετε μαζί μου μέσω email: <a class="contact-email" href="mailto:mvourna@gmail.com">mvourna@gmail.com</a></p>
    </div>
  );
}

export default ThankYou;
