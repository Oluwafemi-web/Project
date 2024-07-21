// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcIv9BGghMyrDhZGl5LXvhI51FKPTRK4E",
  authDomain: "final-project-68dfc.firebaseapp.com",
  projectId: "final-project-68dfc",
  storageBucket: "final-project-68dfc.appspot.com",
  messagingSenderId: "444013301934",
  appId: "1:444013301934:web:f29fcf819df07fe5b05d3f",
  measurementId: "G-5F6QY7C65M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
