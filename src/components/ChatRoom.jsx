import React, { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ChatMessage } from "./ChatMessage";

export const ChatRoom = ({ firebase, messageRef, query, auth }) => {
  const [messages] = useCollectionData(query, { idField: "id" });
  //to handle the data from the form
  const [formValue, setFormValue] = useState();
  const { uid, photoURL } = auth.currentUser;
  const sendMessage = async (e) => {
    e.preventDefault();
    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue(" ");
  };
  return (
    <div>
      <h1>ChatRoom</h1>
      <div>
        {messages &&
          messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={msg}
              auth={auth}
              photoURL={photoURL}
            />
          ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button onClick={(e) => sendMessage}>Send📩</button>
      </form>
    </div>
  );
};
