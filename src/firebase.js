// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBIxft9N0sovvhtCEDEoeRXvyx7phtx0c",
  authDomain: "givngo-products.firebaseapp.com",
  projectId: "givngo-products",
  storageBucket: "givngo-products.appspot.com",
  messagingSenderId: "558193727382",
  appId: "1:558193727382:web:69b7c0d256ebc9b6876fb7",
  measurementId: "G-CN5994KY3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);