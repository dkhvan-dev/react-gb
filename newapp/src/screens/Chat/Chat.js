import { onChildAdded, onValue, push } from "@firebase/database";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";

import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import {
  auth,
  getMsgsListRefById,
  getMsgsRefById,
} from "../../services/firebase";
import { addMessage, addMessageWithReply } from "../../store/messages/actions";
import {
  selectMessages,
  selectMessagesByChatId,
} from "../../store/messages/selectors";
import { AUTHORS } from "../../utils/constants";

export function Chat() {
  const { id } = useParams();

  const [messages, setMessages] = useState([]);

  const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
  // const messages = useSelector(getMessages);
  const dispatch = useDispatch();

  const sendMessage = (text) => {
    push(getMsgsListRefById(id), {
      author: auth.currentUser.email,
      text,
      id: `msg-${Date.now()}`,
    });
    // dispatch(
    //   addMessageWithReply(
    //     {
    //       author: AUTHORS.human,
    //       text,
    //       id: `msg-${Date.now()}`,
    //     },
    //     id
    //   )
    // );
  };

  useEffect(() => {
    const unsubscribe = onValue(getMsgsRefById(id), (snapshot) => {
      const val = snapshot.val();
      if (!snapshot.val()?.exists) {
        setMessages(null);
      } else {
        console.log(val.messageList);
        setMessages(Object.values(val.messageList || {}));
      }
    });

    return unsubscribe;
  }, [id]);

  if (!messages) {
    return <Navigate to="/chat" replace />;
  }

  return (
    <div className="App">
      <div>
        <MessageList messages={messages} />
        <Form onSubmit={sendMessage} />
      </div>
    </div>
  );
}
