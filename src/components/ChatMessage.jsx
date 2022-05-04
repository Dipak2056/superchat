import React from "react";

export const ChatMessage = (props) => {
  const { text, uid } = props.message;
  return (
    <div>
      <p>{text}</p>
      hello
    </div>
  );
};
