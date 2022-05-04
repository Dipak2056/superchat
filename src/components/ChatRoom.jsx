import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ChatMessage } from "./ChatMessage";

export const ChatRoom = ({ messageRef, query, auth }) => {
  const [messages] = useCollectionData(query, { idField: "id" });
  console.log(messageRef);
  return (
    <div>
      ChatRoom
      <div>
        {messages &&
          messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} auth={auth} />
          ))}
      </div>
      <form>
        <input type="text" />
        <button>Send</button>
      </form>
    </div>
  );
};
