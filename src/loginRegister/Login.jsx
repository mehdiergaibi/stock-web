import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase.config";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loginError, setLoginError] = useState("");
  const signIn = signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      alert("u loged in");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setLoginError(errorMessage);
    });

  return (
    <div className="container">
      <div className="login">
        <form className="login-form">
          <h3 className="title">SIGN IN</h3>
          <div className="inputs">
          <InputField
            required
            type={"password"}
            placeholder={"Password"}
            className={"password"}
            handleChange={(data) => setEmail(data)}
          />
          <InputField
            required
            type={"password"}
            placeholder={"Confirm Password"}
            className={"password"}
            handleChange={(data) => setPass(data)}
          />
          </div>
          <button onClick={() => signIn} className="btn log-in-btn">
            Login
          </button>
          <p className="forgot">FORGOT PASSWORD ?</p>
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
      <p style={{ color: "red" }}>{loginError}</p>
    </div>
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
