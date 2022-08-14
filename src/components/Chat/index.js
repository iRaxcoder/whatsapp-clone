import React, { useState } from "react";
import "./style.css";
import { Avatar, IconButton } from "@mui/material";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
  Mic,
} from "@mui/icons-material";

import messageService from "../../service/messages";

function Chat({ messages }) {
  const [messageInput, setMessageInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    messageService
      .post({
        message: messageInput,
        name: "Randall",
        timeStamp: "ahora mismo",
        received: "false",
      })
      .then((response) => {
        console.log(response);
      });
    setMessageInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__header--info">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__header--right">
          <IconButton>
            <SearchOutlined fontSize="24px" />
          </IconButton>
          <IconButton>
            <AttachFile fontSize="24px" />
          </IconButton>
          <IconButton>
            <MoreVert fontSize="24px" />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages?.map((message) => (
          <p className="chat__message">
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timeStamp}</span>
          </p>
        ))}
        <p className="chat__message chat__receiver">
          <span className="chat__name">Randall</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type a message"
            type={"text"}
          />
          <button type="submit" onClick={sendMessage}>
            Send
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
