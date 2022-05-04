import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ChatMessage } from "./ChatMessage";

export const ChatRoom = ({ firestore }) => {
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });
  console.log(messages);
  return (
    <div>
      ChatRoom this is chatroom
      <div></div>
    </div>
  );
};
