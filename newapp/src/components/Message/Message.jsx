import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";
import "./Message.styles.scss";

export const Message = ({ author, text, theme }) => {
  // const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className="message">
      <span style={{ color: theme === "dark" ? "red" : "blue" }}>
        {author}:
      </span>
      <span>{text}</span>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string,
};

const withThemeContext = (Component) => (props) => {
  const { theme } = useContext(ThemeContext);

  return <Component {...props} theme={theme} />;
};

export const MessageWithBlueColor = withThemeContext(Message);

// import React from "react";

// export class Message extends React.Component {
//   render() {
//     const { name, asd, doSmth } = this.props;
//     return (
//       <h3 onClick={doSmth}>
//         I am a message: {name}, {asd}
//       </h3>
//     );
//   }
// }
