import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createStore, combineReducers } from "redux";
import usersSlice from "./state/usersSlice";
import { Provider } from "react-redux";


import './index.css'

const rootReducer = combineReducers({
  mySlice: usersSlice,
});

const store = createStore(rootReducer);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store= {store}>
    <BrowserRouter>

    <App />
    </BrowserRouter>

    </Provider>
  </React.StrictMode>,
)
