import React ,{ useState } from "react";
import { auth, firestore } from '../firebase.js';
import "./style.css";

function PreQuestionnaire(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formValues, setFormValues] = useState({
    auth: [email, password]
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    props.nextStep(formValues.auth);

    try {
      // Sign in user
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      // Save user data in Firestore
      await firestore.collection('users').doc(user.uid).set({
        email,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="background">
        <div className="selectedDeviceParent" >
            <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => {setEmail(e.target.value); setFormValues(e.target.value, password)}} />
            <input type="password" value={password} onChange={(e) => {setPassword(e.target.value); setFormValues(email, e.target.value)}} />
            <button type="submit">Sign In</button>
            </form>
        </div>
    </div>
  );
}

export default PreQuestionnaire;
