import React, { useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";

import "./App.css";
import { Form } from "./components/Form/Form";
import { AUTHORS } from "./utils/constants";
import { MessageList } from "./components/MessageList/MessageList";
import { ChatList } from "./components";
import { Chat } from "./screens/Chat/Chat";
import { MyButton } from "./components/Example/Example";
import { ThemeContext } from "./utils/ThemeContext";
import { Profile } from "./screens/Profile/Profile";
import { store } from "./store";

const Home = () => <h4>Home page</h4>;

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Provider store={store}>
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
            <Route path="/chat" element={<ChatList />}>
              <Route path=":id" element={<Chat />} />
            </Route>
            <Route path="*" element={<h4>404</h4>} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
