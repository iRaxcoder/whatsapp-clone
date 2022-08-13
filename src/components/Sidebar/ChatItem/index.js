import React from "react";
import "./style.css";
import { Avatar } from "@mui/material";
const ChatItem = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>chat name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  );
};

export default ChatItem;
