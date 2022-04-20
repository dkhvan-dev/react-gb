import { ADD_CHAT } from "../chats/actions";
import {
  ADD_MESSAGE,
  CLEAR_MESSAGES_FOR_CHAT,
  INIT_MESSAGES_FOR_CHAT,
} from "./actions";

const initialState = {};

export const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        [payload.chatId]: [...state[payload.chatId], payload.newMsg],
      };
    }
    // case ADD_CHAT: {
    //   return {
    //     ...state,
    //     [payload.id]: [],
    //   };
    // }
    case INIT_MESSAGES_FOR_CHAT: {
      return {
        ...state,
        [payload]: [],
      };
    }
    case CLEAR_MESSAGES_FOR_CHAT: {
      const copy = { ...state };
      delete copy[payload];

      return copy;
    }
    default:
      return state;
  }
};
