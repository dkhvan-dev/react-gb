import { AUTHORS } from "../../utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const INIT_MESSAGES_FOR_CHAT = "MESSAGES::INIT_MESSAGES_FOR_CHAT";
export const CLEAR_MESSAGES_FOR_CHAT = "MESSAGES::CLEAR_MESSAGES_FOR_CHAT";

export const addMessage = (newMsg, chatId) => ({
  type: ADD_MESSAGE,
  payload: {
    newMsg,
    chatId,
  },
});

export const initMessagesForChat = (chatId) => ({
  type: INIT_MESSAGES_FOR_CHAT,
  payload: chatId,
});

export const clearMessages = (chatId) => ({
  type: CLEAR_MESSAGES_FOR_CHAT,
  payload: chatId,
});

let timeout;

export const addMessageWithReply = (newMsg, chatId) => (dispatch, getState) => {
  dispatch(addMessage(newMsg, chatId));

  if (newMsg?.author === AUTHORS.human) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      dispatch(
        addMessage(
          {
            author: AUTHORS.robot,
            text: "hello friend",
            id: `msg-${Date.now()}`,
          },
          chatId
        )
      );
    }, 1000);
  }
};

/*
export const initMsgsTracking = () => (dispatch) => {
  onValue(msgsRef, (snapshot) => {
    const newMsgs = {};

    snapshot.forEach((chatMsgsSnap) => {
      newMsgs[chatMsgsSnap.key] = Object.values(
        chatMsgsSnap.val().messageList || {}
      );
    });

    dispatch(setMsgs(newMsgs));
  });
};
*/
