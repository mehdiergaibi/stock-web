import "./App.css";
import Login from "./loginRegister/Login";

import Register from "./loginRegister/Register";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import { selectUser } from "./state/usersSlice";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser((state) => state.user));
  console.log("select user",selectUser);
  console.log("user",user);
  console.log("current user",user.currentUser);
  return (
    <>
      {user.currentUser ? (
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
