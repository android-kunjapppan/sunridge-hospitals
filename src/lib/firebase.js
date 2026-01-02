// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC1qzGK7db5osxpxl-Jk-1Ac5B5r6M4czg",
  authDomain: "sunridge-c16f5.firebaseapp.com",
  projectId: "sunridge-c16f5",
  storageBucket: "sunridge-c16f5.firebasestorage.app",
  messagingSenderId: "475404958686",
  appId: "1:475404958686:web:652cf824c32423a800bb4f",
  measurementId: "G-K856FYGKH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);