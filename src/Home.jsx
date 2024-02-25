import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase.config";
import { useDispatch } from "react-redux";

import { setUser } from "./state/usersSlice";

function Home() {
  const dispatch = useDispatch;

  const SignOut = (e) => {
    e.preventDefault();
    if (confirm("are sure? ")) {
      signOut(auth)
        .then(() => {
          dispatch(setUser(null));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      Home
      <button onClick={SignOut}>Log out</button>
    </div>
  );
}

export default Home;
