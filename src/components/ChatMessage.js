import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-10"
        alt="user-icon"
        src="https://freesvg.org/img/abstract-user-flat-4.png"
      />
      <span className="font-bold px-2 text-sm">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;
