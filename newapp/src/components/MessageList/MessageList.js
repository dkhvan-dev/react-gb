import { Message, MessageWithBlueColor } from "../Message/Message";

export const MessageList = ({ messages }) =>
  messages.map((msg) => (
    <MessageWithBlueColor
      key={msg.id}
      text={msg.text}
      author={msg.author}
      theme="light"
    />
  ));
