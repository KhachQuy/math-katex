import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
// function firebase () {
  firebase.initializeApp({
    apiKey: "AIzaSyBvnYpXbLKaXAIFOAu4m3sBLqp1dlwVYJM",
    authDomain: "ezmathdoc.firebaseapp.com",
    projectId: "ezmathdoc",
    storageBucket: "ezmathdoc.appspot.com",
    messagingSenderId: "856462869383",
    appId: "1:856462869383:web:e225377bb418a805a98922",
    measurementId: "G-1BC5VCHRY4"
  });
  export const auth = firebase.auth()
  const firestore= firebase.firestore()
  
 
  export const database = {
    document: firestore.collection("document"),
    text: firestore.onSnapshotsInSync(document),
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
  }
  // export default app