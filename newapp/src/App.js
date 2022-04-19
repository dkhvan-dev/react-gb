import React, { useState } from "react";
import { Provider, shallowEqual, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

import "./App.css";
import { ChatList } from "./components";
import { Chat } from "./screens/Chat/Chat";
import { ThemeContext } from "./utils/ThemeContext";
import { Profile } from "./screens/Profile/Profile";
import { store } from "./store";
import { Home } from "./screens/Home/Home";
import { addChat, deleteChat } from "./store/chats/actions";
import { selectChats } from "./store/chats/selectors";

const initialChats = [
  {
    name: "Chat1",
    id: "chat1",
  },
  {
    name: "Chat2",
    id: "chat2",
  },
  {
    name: "Chat3",
    id: "chat3",
  },
];

const initMessages = initialChats.reduce((acc, chat) => {
  acc[chat.id] = [];
  return acc;
}, {});

// redux toolkit

function App() {
  const [theme, setTheme] = useState("dark");

  const chats = useSelector(selectChats, shallowEqual);
  const dispatch = useDispatch();
  const [messages, setMessages] = useState(initMessages);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const addMessage = (newMsg, id) => {
    setMessages({ ...messages, [id]: [...messages[id], newMsg] });
  };

  const addNewChat = (newChat) => {
    dispatch(addChat(newChat));
    setMessages((prevMessages) => ({ ...prevMessages, [newChat.id]: [] }));
  };

  const removeChat = (id) => {
    dispatch(deleteChat(id));
    setMessages((prevMessages) => {
      const newMessages = { ...prevMessages };
      delete newMessages[id];

      return newMessages;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme }}>
      <BrowserRouter>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => ({
                color: isActive ? "green" : "blue",
              })}
              style={({ isActive }) => ({
                color: isActive ? "green" : "blue",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "green" : "blue",
              })}
              to="/chat"
            >
              Chat
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "green" : "blue",
              })}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/chat"
            element={
              <ChatList
                deleteChat={removeChat}
                addChat={addNewChat}
                chats={chats}
              />
            }
          >
            <Route
              path=":id"
              element={<Chat messages={messages} addMessage={addMessage} />}
            />
          </Route>
          <Route path="*" element={<h4>404</h4>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;