import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "../../utils/ThemeContext";
import { MyButton } from "../Example/Example";
import "./ChatList.css";

const chats = [
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

export const ChatList = () => {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <>
      <MyButton
        onClick={
          changeTheme
          // setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
        }
      >
        Click
      </MyButton>
      <div className="chat-list">
        {chats.map((chat) => (
          <Link to={`/chat/${chat.id}`} key={chat.id}>
            {chat.name}
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
};
