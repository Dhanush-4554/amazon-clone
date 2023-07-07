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
   //api info
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore;
const auth = firebase.auth();

export {  db,auth };
