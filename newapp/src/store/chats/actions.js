export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";

export const addChat = (newChat) => ({
  type: ADD_CHAT,
  payload: newChat,
});

export const deleteChat = (idToDelete) => ({
  type: DELETE_CHAT,
  payload: idToDelete,
});

/*
export const addChatWithFb = (newChatName) => () => {
  const newId = `chat${Date.now()}`;
  const newChat = {
    id: newId,
    name: newChatName,
  };
  set(getChatRefById(newId), newChat);
  set(getMsgsRefById(newId), { empty: true });
};
*/
