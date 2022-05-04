import React from "react";

export const ChatMessage = ({ message, auth }) => {
  const { text, uid, photoURL } = message;
  console.log(photoURL);
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div>
      <div className={`message ${messageClass}`}>
        <img src={photoURL} />
        <p>{text}</p>
      </div>
    </div>
  );
};
