import React from "react";

export const SignOut = ({ auth }) => {
  return (
    auth.currentUser && (
      <div>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </div>
    )
  );
};
