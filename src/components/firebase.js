// import firebase from 'firebase';
// import "firebase/auth"
// import firebase from "firebase";
// require("firebase/auth");
// import firebase from 'firebase/app';
// import 'firebase/auth';
import 'firebase/firestore';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBg8FZqmdvzrxs3hGZPDOh1MI1Q1F2TDhA",
    authDomain: "clone-ed385.firebaseapp.com",
    projectId: "clone-ed385",
    storageBucket: "clone-ed385.appspot.com",
    messagingSenderId: "733545505347",
    appId: "1:733545505347:web:00673e23200a8216fcaaf6",
    measurementId: "G-GKDQETTTTY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore;
const auth = firebase.auth();

export {  db,auth };