// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3HeyClBFNCxMUHHAtS4-ax8nriKrELlg",
  authDomain: "react-http-6537e.firebaseapp.com",
  databaseURL: "https://react-http-6537e-default-rtdb.firebaseio.com",
  projectId: "react-http-6537e",
  storageBucket: "react-http-6537e.appspot.com",
  messagingSenderId: "291890639605",
  appId: "1:291890639605:web:d15851d195fcd324730bbc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
