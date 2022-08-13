import React from "react";
import "./style.css";
import { Avatar, IconButton } from "@mui/material";
import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material";

function Chat() {
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
        <p>
          <span className="chat__name">Randall</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
    </div>
  );
}

export default Chat;
