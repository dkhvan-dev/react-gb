import { onValue, set } from "@firebase/database";
import { userNameRef, userShowNameRef } from "../../services/firebase";

export const TOGGLE_CHECKBOX = "PROFILE::TOGGLE_CHECKBOX";
export const SET_NAME = "PROFILE::SET_NAME";

export const toggleCheckbox = {
  type: TOGGLE_CHECKBOX,
};

export const setName = (name) => ({
  type: SET_NAME,
  newName: name,
});

let unsubscribe;

//--------------------------------

export const initProfileTrack = () => (dispatch) => {
  const unsubscribeName = onValue(userNameRef, (snapshot) => {
    dispatch(setName(snapshot.val()));
  });
  const unsubscribeShowName = onValue(userShowNameRef, (snapshot) => {
    dispatch(toggleCheckbox);
  });

  unsubscribe = () => {
    unsubscribeName();
    unsubscribeShowName();
  };
};

export const stopProfileTrack = () => () => {
  unsubscribe();
};

export const setNameFB = (name) => () => {
  set(userNameRef, name);
};

export const setShowName = (value) => () => {
  set(userShowNameRef, value);
};
