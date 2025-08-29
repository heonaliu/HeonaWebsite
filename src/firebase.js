// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeIXLOKZeIOt62H7ReLPVKZGTd1l5hTe8",
  authDomain: "heonawebsite.firebaseapp.com",
  projectId: "heonawebsite",
  storageBucket: "heonawebsite.firebasestorage.app",
  messagingSenderId: "1081684843755",
  appId: "1:1081684843755:web:62b0b55cacd58f7a1bf2ae",
  measurementId: "G-209PN46CMS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Optional: sign in anonymously on app start
signInAnonymously(auth)
  .then(() => {
    console.log("Anonymous user signed in");
  })
  .catch((error) => {
    console.error("Auth error:", error);
  });

export { db, auth };
