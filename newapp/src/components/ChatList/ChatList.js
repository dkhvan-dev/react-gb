import { Link, Outlet } from "react-router-dom";
import "./ChatList.css";
import { AddChat } from './AddChat';

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
  {
    name: "Chat4",
    id: "chat4",
  },
];

export const ChatList = () => (
  <>
    <div className="chat-list">
      {chats.map((chat) => (
        <Link to={`/chat/${chat.id}`} key={chat.id}>
          {chat.name}
        </Link>
      ))}

      {/* <AddChat /> */}
    </div>
    <Outlet />
  </>
);