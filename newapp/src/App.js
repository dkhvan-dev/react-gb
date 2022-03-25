import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Message } from "./components/Message/Message";
import { Form } from './components/Form/Form';

const name = "Alex";

const msgs = [
  {
    author: name,
    text: "text1",
  },
  {
    author: name,
    text: "text2",
  },
];

function App() {
  const [messages, setMessages] = useState(msgs);

  const addMessage = (newText) => {
    setMessages([...messages, {text: newText, author: 'author'}]);
  } 

  return (
    <div className="App">
      {messages.map((msg) => (
        <Message text={msg.text} author={msg.author} />
      ))}
      {/* <button onClick={addMessage}>Add msg</button> */}
      <Form onSubmit={addMessage} />
    </div>
  );
}

export default App;
