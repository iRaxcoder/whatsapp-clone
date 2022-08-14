import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import messageService from "./service/messages";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    messageService.get().then((response) => {
      setMessages(response);
    });
  }, []);

  useEffect(() => {
    var pusher = new Pusher("5f1ef9f0bd441f452a6b", {
      cluster: "eu",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
