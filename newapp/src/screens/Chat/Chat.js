import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";

import { ChatList } from "../../components/ChatList/ChatList";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { AUTHORS } from "../../utils/constants";

export function Chat({ messages, addMessage }) {
  const { id } = useParams();

  const timeout = useRef();
  const wrapperRef = useRef();

  const sendMessage = (text) => {
    addMessage(
      {
        author: AUTHORS.human,
        text,
        id: `msg-${Date.now()}`,
      },
      id
    );
  };

  useEffect(() => {
    const lastMessage = messages[id]?.[messages[id]?.length - 1];
    if (lastMessage?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        addMessage(
          {
            author: AUTHORS.robot,
            text: "hello friend",
            id: `msg-${Date.now()}`,
          },
          id
        );
      }, 1000);
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [messages]);

  if (!messages[id]) {
    return <Navigate to="/chat" replace />;
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