import React from "react";
import firebase from "firebase/compat/app";

export const SignIn = ({ firebae, auth }) => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <h1>hello</h1>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  );
};
