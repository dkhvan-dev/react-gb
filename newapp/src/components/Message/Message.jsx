import './Message.styles.css';

export const Message = ({ name, number, bold }) => {
  return (
    <h3 className={"message" + (!bold ? "header" : "")}>
      I am a message: {name}, {number}
    </h3>
  );
};