import React, { useState } from "react";


const EmailLinkAuth = (props) => {

    const email = props.email;
    const setEmail = props.setEmail;
    const signInWithGoogle = props.signInWithGoogle;

    // Function to handle email input change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

  return (
    <div className="background">
        <h1 className="header">Email Link Authentication</h1>
        <form>
            <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
            />
            {/* <button type="button" onClick={sendEmailLink}>
                Send Sign-in Link
            </button> */}
            <button type="button" onClick={signInWithGoogle}>
            Sign in with Google
            </button>
        </form>
        <p>
        Click the link sent to your email to complete the sign-in process.
        </p>
    </div>
  );
};

export default (EmailLinkAuth);