//import React from 'react';
//import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  //<React.StrictMode>
  <App />, //j'ai rajouté la virgule, virgule a supprimer si jamais on decommente le <React.StrictMode>
  //</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
