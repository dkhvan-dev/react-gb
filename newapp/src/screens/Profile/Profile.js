import { onValue, set } from "@firebase/database";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../components/Form/Form";
import {
  asdfRef,
  auth,
  logOut,
  userNameRef,
  userRef,
  userShowNameRef,
} from "../../services/firebase";
import {
  initProfileTrack,
  setName,
  setNameFB,
  setShowName,
  stopProfileTrack,
  toggleCheckbox,
} from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { usePrev } from "../../utils/usePrev";

export const Profile = ({ onLogout }) => {
  const dispatch = useDispatch();

  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);
  const handleClick = () => {
    dispatch(setShowName(!showName));
  };

  const handleSubmit = (text) => {
    dispatch(setNameFB(text));
  };

  useEffect(() => {
    dispatch(initProfileTrack());

    return () => {
      dispatch(stopProfileTrack());
    };
  }, []);

  return (
    <>
      <h3>This is Profile</h3>
      <button onClick={logOut}>LOGOUT</button>
      {showName && <span>{name}</span>}
      <button onClick={handleClick}>change show name</button>
      <Form onSubmit={handleSubmit} />
    </>
  );
};

// const ProfileToConnect = ({ name, showName, changeName, changeCheckbox }) => {
//   console.log(name, showName);
//   const handleClick = () => {
//     changeCheckbox();
//   };

//   const handleSubmit = (text) => {
//     changeName(text);
//   };

//   return (
//     <>
//       <h3>This is Profile</h3>
//       {showName && <span>{name}</span>}
//       <button onClick={handleClick}>change show name</button>
//       <Form onSubmit={handleSubmit} />
//     </>
//   );
// };

// const mapStateToProps = (state) => ({
//   name: state.profile.name,
//   showName: state.profile.showName,
// });

// const mapDispatchToProps = {
//   changeName: setName,
//   changeCheckbox: () => toggleCheckbox,
// };

// export const Profile = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProfileToConnect);
