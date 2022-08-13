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

function Chat() {
  const [messageInput, setMessageInput] = useState("");
  const sendMessage = () => {};

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
        <p className="chat__message">
          <span className="chat__name">Randall</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Randall</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
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
