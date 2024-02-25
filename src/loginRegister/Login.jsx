import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../state/usersSlice";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [emailL, setEmailL] = useState("");
  const [passL, setPassL] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        setUser({
          id: user.uid,
          email: user.email,
        })
      );
    } else {
      dispatch(setUser(null));
    }
    if(isLoading){
      setIsLoading(false)
    }
  });

  const signIn = async (e) => {
    e.preventDefault();
    //console.log(email, pass, loginError)
    await signInWithEmailAndPassword(auth, emailL, passL)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email, user.uid);
        // ...
        dispatch(
          setUser({
            id: user.uid,
            email: user.email,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;

        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const forgotPass = () => {
    const email = prompt("please enter your email: ");
    sendPasswordResetEmail(auth, email);
    alert("Email sent! check your email inbox to chnage password!!!");
  };
  return (
    <>
    { isLoading && <div className="loading" ><h1 >Loading....</h1></div> }
    <div className="container">
      <div className="login">
        <form className="login-form">
          <h3 className="title">SIGN IN</h3>
          <div className="inputs">
            <InputField
              required
              type={"email"}
              placeholder={"email"}
              className={"email"}
              handleChange={(data) => setEmailL(data)}
            />
            <InputField
              required
              type={"password"}
              placeholder={"Password"}
              className={"password"}
              handleChange={(data) => setPassL(data)}
            />
          </div>
          <button type="submit" onClick={signIn} className="btn log-in-btn">
            Login
          </button>
          <p onClick={forgotPass} className="forgot">
            FORGOT PASSWORD ?
          </p>
          <p className="not-accnt">
            NEED AN ACCOUNT ?{" "}
            <span>
              <Link className="sgn-up" to="/register">
                SIGN UP.
              </Link>
            </span>{" "}
          </p>
        </form>
      </div>
      <p style={{ color: "red" }}>{error}</p>
    </div>
    </>
    
  );
};
const InputField = ({ placeholder, handleChange, type }) => {
  const [inputValue, setInputValue] = useState("");
  const handelChangeEvent = (e) => {
    setInputValue(e.target.value);
    handleChange(e.target.value);
  };
  return (
    <input
      required
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={handelChangeEvent}
      className="password"
    />
  );
};

export default Login;
