import { onValue, remove, set } from "@firebase/database";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import {
  chatsRef,
  getChatRefById,
  getMsgsRefById,
} from "../../services/firebase";
import { addChat, deleteChat } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import {
  clearMessages,
  initMessagesForChat,
} from "../../store/messages/actions";
import { Form } from "../Form/Form";
import "./ChatList.css";

export const ChatList = () => {
  const [chats, setChats] = useState([]);
  // const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  const handleSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      id: `chat-${Date.now()}`,
    };

    // dispatch(addChat(newChat));
    set(getChatRefById(newChat.id), newChat);
    set(getMsgsRefById(newChat.id), { exists: true });
    // dispatch(initMessagesForChat(newChat.id));
  };

  const handleRemoveChat = (id) => {
    // dispatch(deleteChat(id));
    remove(getChatRefById(id));
    set(getMsgsRefById(id), null);
    // dispatch(clearMessages(id));
  };

  useEffect(() => {
    const unsubscribe = onValue(chatsRef, (snapshot) => {
      console.log(snapshot.val());
      setChats(Object.values(snapshot.val() || {}));
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <div className="chat-list">
        {chats.map((chat) => (
          <div key={chat.id}>
            <Link to={`/chat/${chat.id}`}>{chat.name}</Link>
            <span onClick={() => handleRemoveChat(chat.id)}>delete</span>
          </div>
        ))}
      </div>
      <Form onSubmit={handleSubmit} />
      <Outlet />
    </>
  );
};
