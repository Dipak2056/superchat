import React from "react";

export const ChatMessage = ({ message, auth }) => {
  const { text, uid } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  const photoUrl = "#";
  return (
    <div>
      <div className={`message ${messageClass}`}>
        <img src={photoUrl} />
        <p>{text}</p>
      </div>
    </div>
  );
};
