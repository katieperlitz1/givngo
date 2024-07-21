// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import data from "../src/data.js"; // Adjust the path if necessary

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCPPrX2mrKFjSUtMkEboWtPamteJJi4RwA",
  authDomain: "givngo-418be.firebaseapp.com",
  projectId: "givngo-418be",
  storageBucket: "givngo-418be.appspot.com",
  messagingSenderId: "983808083170",
  appId: "1:983808083170:web:07822f2139cc19e0e34abb",
  measurementId: "G-5KQ5MFPVD8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addData() {
  const productsCollection = collection(db, "resources");

  for (const product of data.products) {
    try {
      await addDoc(productsCollection, product);
      console.log(`Added product with ID: ${product.id}`);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}

// Run the addData function
addData()
  .then(() => {
    console.log("All data added to Firestore");
  })
  .catch((e) => {
    console.error("Error adding data to Firestore: ", e);
  });
