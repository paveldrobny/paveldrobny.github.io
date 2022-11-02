import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
// import "firebase/firestore";
// import firebase from "firebase";

// var config = {
//   apiKey: "AIzaSyA14cD51_IYnfmRyL_BxUrfp5q7mhbkyyc",
//   authDomain: "personal-24c21.firebaseapp.com",
//   projectId: "personal-24c21",
//   storageBucket: "personal-24c21.appspot.com",
//   messagingSenderId: "165295557630",
//   appId: "1:165295557630:web:cd002ca44b29c4f7154eaf",
//   measurementId: "G-B3WV4J8D5C",
// };

// firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
