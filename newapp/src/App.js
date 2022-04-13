import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { Form } from "./components/Form/Form";
import { AUTHORS } from "./utils/constants";
import { MessageList } from "./components/MessageList/MessageList";
import { ChatList } from "./components/ChatList/ChatList";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import { Chat } from "./screens/Chat/Chat";

const Home = () => <h4>Home page</h4>;

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
            to="/chat"
          >
            Chat
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatList />}>
          <Route path=":id" element={<Chat />} />
        </Route>
        <Route path="*" element={<h4>404</h4>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;