 import firebase from 'firebase';
 require ('firebase/auth');

// function fire () {
  var firebaseConfig = {
    apiKey: "AIzaSyBvnYpXbLKaXAIFOAu4m3sBLqp1dlwVYJM",
    authDomain: "ezmathdoc.firebaseapp.com",
    projectId: "ezmathdoc",
    storageBucket: "ezmathdoc.appspot.com",
    messagingSenderId: "856462869383",
    appId: "1:856462869383:web:e225377bb418a805a98922",
    measurementId: "G-1BC5VCHRY4"
  };
  // function fire () {
  // Initialize Firebase
// }
    const fire = firebase.initializeApp(firebaseConfig)
export default fire;
