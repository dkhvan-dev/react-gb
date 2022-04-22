import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyALj0Ll1fIW3E5lqo8VzPNaJsZh1_P7gbQ",
  authDomain: "gb1402-5cc0b.firebaseapp.com",
  databaseURL: "https://gb1402-5cc0b-default-rtdb.firebaseio.com",
  projectId: "gb1402-5cc0b",
  storageBucket: "gb1402-5cc0b.appspot.com",
  messagingSenderId: "863386602685",
  appId: "1:863386602685:web:224e27c3761995ee5dfbd4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
};
export const logIn = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};
export const logOut = async () => {
  await signOut(auth);
};

export const userRef = ref(db, "user");
export const userNameRef = ref(db, "user/name");
export const userShowNameRef = ref(db, "user/showName");
export const chatsRef = ref(db, "chats");
export const msgsRef = ref(db, "messages");
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
export const getMsgsListRefById = (chatId) =>
  ref(db, `messages/${chatId}/messageList`);
