import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTiKj-n-f-TzsyjTzU6mceKOU0UZx6wkM",
  authDomain: "clone-318ce.firebaseapp.com",
  projectId: "clone-318ce",
  storageBucket: "clone-318ce.appspot.com",
  messagingSenderId: "752977161208",
  appId: "1:752977161208:web:e30dc1255528266cb9440d",
  measurementId: "G-G3LSR55HQX"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };