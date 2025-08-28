// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
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
const analytics = getAnalytics(app);
// Initialize Firestore
const db = getFirestore(app);
export { db };
