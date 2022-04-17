import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";

import { ChatList } from "../../components/ChatList/ChatList";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { AUTHORS } from "../../utils/constants";

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

const initMessages = {
  chat1: [],
  chat2: [],
  chat3: [],
};

// const name = "value";

// const obj = {
//   name: 1,
//   [name]: 2,
// };

// console.log(obj.name, obj.value);

export function Chat() {
  const { id } = useParams();
  const [messages, setMessages] = useState(initMessages);

  const timeout = useRef();
  const wrapperRef = useRef();

  const addMessage = (newMsg) => {
    setMessages({ ...messages, [id]: [...messages[id], newMsg] });
  };

  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    const lastMessage = messages[id]?.[messages[id]?.length - 1];
    if (lastMessage?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        addMessage({
          author: AUTHORS.robot,
          text: "hello friend",
          id: `msg-${Date.now()}`,
        });
      }, 1000);
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [messages]);

  if (!messages[id]) {
    return <Navigate to="/chat" replace />
  }

  return (
    <div className="App" ref={wrapperRef}>
      <div>
        <MessageList messages={messages[id]} />
        <Form onSubmit={sendMessage} />
      </div>
    </div>
  );
}
