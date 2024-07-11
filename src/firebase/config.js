// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPPrX2mrKFjSUtMkEboWtPamteJJi4RwA",
  authDomain: "givngo-418be.firebaseapp.com",
  projectId: "givngo-418be",
  storageBucket: "givngo-418be.appspot.com",
  messagingSenderId: "983808083170",
  appId: "1:983808083170:web:07822f2139cc19e0e34abb",
  measurementId: "G-5KQ5MFPVD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);