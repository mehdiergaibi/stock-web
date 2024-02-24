import "./App.css";
import Login from "./loginRegister/Login";

import Register from "./loginRegister/Register";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import { selectUser } from "./state/usersSlice";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  return (
    <div>
      {user ? (
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
