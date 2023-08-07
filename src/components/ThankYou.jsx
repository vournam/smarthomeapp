import React from 'react';
import "./style.css";
import AnimatedBackground from "./AnimatedBackground";

const ThankYou = () => {
  

  return (
    <div className="thank-you-background">
      <div className="form-container blur-container">
        <AnimatedBackground />
        <p className="thankyou-text">Ο χρόνος που αφιερώσατε θα συμβάλει στην ανάλυση μιας ολοκληρωμένης δειγματοληψίας και θα χαρούμε να μοιραστούμε τα ευρήματα της μαζί σας.</p>
        <p className="thankyou-text">Αν έχετε οποιεσδήποτε ερωτήσεις ή παρατηρήσεις, μην διστάσετε να επικοινωνήσετε μαζί μου μέσω email: <a className="contact-email" href="mailto:mvourna@gmail.com">mvourna@gmail.com</a></p>
      </div>
        <div className="form-container blur-container">
          <p className="thankyou-text-bold">Ανακαλύψτε τον κόσμο του HCI και τις τάσεις του User Experience (UX)</p>
          <p className="thankyou-text">Πατώντας στους παρακάτω συνδέσμους, μπορείτε να μάθετε περισσότερα για τον όρο "HCI" μέσω ενός ενδιαφέροντος άρθρου με σχετικό βίντεο από τον διακεκριμένο στον τομέα, Alan Dix. Επίσης, μπορείτε να κατεβάσετε δωρεάν έρευνα για τις κορυφαίες τάσεις του User Experience (UX) για το έτος 2023.</p>
          <div className="free">
            <a className="free-download" href="https://www.interaction-design.org/literature/topics/human-computer-interaction" target="_blank" rel="noopener noreferrer">HCI</a>
            <a className="free-download" href="https://offers.hubspot.com/social-media-trends-report" target="_blank" rel="noopener noreferrer">UX</a>
          </div>
        </div>
    </div>
  );
}

export default ThankYou;
