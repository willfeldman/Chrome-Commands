import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBAK3eY1draiCkZgJzBqiWL3mdJb6_Bq4A",
  authDomain: "chrome-commands.firebaseapp.com",
  databaseURL: "https://chrome-commands-default-rtdb.firebaseio.com",
  projectId: "chrome-commands",
  storageBucket: "chrome-commands.appspot.com",
  messagingSenderId: "973469166453",
  appId: "1:973469166453:web:0c371ac093747a0c32c13c",
  measurementId: "G-HHK8V0NQHJ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
