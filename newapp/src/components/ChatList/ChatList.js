import { Link, Outlet } from "react-router-dom";
import { Form } from "../Form/Form";
import "./ChatList.css";

export const ChatList = ({ chats, addChat, deleteChat }) => {
  const handleSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      id: `chat-${Date.now()}`,
    };

    addChat(newChat);
  };

  return (
    <>
      <div className="chat-list">
        {chats.map((chat) => (
          <div key={chat.id}>
            <Link to={`/chat/${chat.id}`}>{chat.name}</Link>
            <span onClick={() => deleteChat(chat.id)}>delete</span>
          </div>
        ))}
      </div>
      <Form onSubmit={handleSubmit} />
      <Outlet />
    </>
  );
};