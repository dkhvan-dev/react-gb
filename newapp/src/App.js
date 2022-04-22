import React, { useState } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

import "./App.css";
import { ChatList } from "./components";
import { Chat } from "./screens/Chat/Chat";
import { ThemeContext } from "./utils/ThemeContext";
import { Profile } from "./screens/Profile/Profile";
import { Home } from "./screens/Home/Home";
import { Articles } from "./screens/Articles/Articles";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";

function App() {
  const [theme, setTheme] = useState("dark");
  // const [messages, setMessages] = useState(initMessages);

  // [{ name: string, id: string }] <--- chats
  // { [chatId]: [ { text: string, author: string, id: string } ] } <--- messsages

  // const chats = [{ name: 'Chat1', id: 'chat1' }]
  // const messages = { chat1: [ { text: 'hello', author: 'friend', id: 'message-1' }] }
  // messages[chat1] <---- messages from Chat1

  // --------------------------------------

  // const chats = [{ name: 'Chat1', id: 'chat1' }, { name: 'Chat2', id: 'chat2' }]
  // const messages = { chat1: [ { text: 'hello', author: 'friend', id: 'message-1' }], chat2: [] }
  // messages[chat2] <---- messages from Chat2
  // const copyOfMessages = { ...messages, chat2: [ ...messages[chat2] ] };
  // copyOfMessages[chat2] = [ ...copyOfMessages[chat2], { text: 'text', author: 'a', id: 'msg2' } ]
  // =-=-=-=-=-=-=-=-=-=-=-
  // const newMsgs = { ...messages, chat2: [ ...messages[chat2], { text: 'text', author: 'a', id: 'msg2' } ] };
  //

  const [authed, setAuthed] = useState(false);

  const handleLogin = () => {
    setAuthed(true);
  };
  const handleLogout = () => {
    setAuthed(false);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
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
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "green" : "blue",
              })}
              to="/articles"
            >
              Articles
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<PublicRoute authed={authed} />}>
            <Route path="" element={<Home onAuth={handleLogin} />} />
          </Route>

          <Route path="/profile" element={<PrivateRoute authed={authed} />}>
            <Route path="" element={<Profile onLogout={handleLogout} />} />
          </Route>

          <Route path="/articles" element={<Articles />} />
          <Route path="/chat" element={<ChatList />}>
            <Route path=":id" element={<Chat />} />
          </Route>
          <Route path="*" element={<h4>404</h4>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
