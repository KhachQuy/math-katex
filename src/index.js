import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBvnYpXbLKaXAIFOAu4m3sBLqp1dlwVYJM",
  authDomain: "ezmathdoc.firebaseapp.com",
  projectId: "ezmathdoc",
  storageBucket: "ezmathdoc.appspot.com",
  messagingSenderId: "856462869383",
  appId: "1:856462869383:web:1a11642928874c95a98922",
  measurementId: "G-WP1N48XVFJ"
};

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('EzMathDoc-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
