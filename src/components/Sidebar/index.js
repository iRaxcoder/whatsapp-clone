import React from "react";
import "./style.css";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Avatar } from "@mui/material/";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import ChatItem from "./ChatItem";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__header--right">
          <IconButton>
            <DonutLargeIcon fontSize="24px" />
          </IconButton>
          <IconButton>
            <ChatIcon fontSize="24px" />
          </IconButton>
          <IconButton>
            <MoreVertIcon fontSize="24px" />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__search--container">
          <SearchOutlined sx={{ color: "gray" }} />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  );
};

export default Sidebar;
