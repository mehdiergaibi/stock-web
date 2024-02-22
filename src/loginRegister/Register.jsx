import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../config/firebase.config";
function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [uname, setUname] = useState("");
  const [loginError, setLoginError] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, pass)
      .then((userCred) => {
        const user = userCred.user;
        alert("you signed up successufily");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginError(errorMessage);
      });
  };

  return (
    <div className="container">
      <form className="register-form">
        <h3 className="title">SIGN UP</h3>
        <div className="inputs">
          <InputField
            required
            type={"text"}
            placeholder={"User name"}
            className={"uname"}
            handleChange={(data) => setUname(data)}
          />
          <InputField
            required
            type={"email"}
            placeholder={"Email"}
            className={"email"}
            handleChange={(data) => setEmail(data)}
          />

          <InputField
            required
            type={"password"}
            placeholder={"Password"}
            className={"password"}
            handleChange={(data) => setPass(data)}
          />
          <InputField
            required
            type={"password"}
            placeholder={"Confirm Password"}
            className={"password"}
            handleChange={(data) => setCpass(data)}
          />
        </div>
        <button type="button" className="btn signup-in-btn" onClick={signUp}>
          Sign Up
        </button>
        <p className="already-accnt">
          ALREADY HAVE AN ACCOUNT ?{" "}
          <span>
            <Link className="sgn-in" to="/login">
              SIGN IN.
            </Link>
          </span>{" "}
        </p>
      </form>
      <p style={{ color: "red" }}>{loginError}</p>
    </div>
  );
}

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

export default Register;
