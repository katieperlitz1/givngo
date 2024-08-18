import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("0")
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("1")
      setLoading(true);
      if (user) {
        console.log("2")
        const docRef = doc(db, "userData", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setCurrUser(docSnap.data());
        } else {
          console.log("No such document!");
        }
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      console.log("3")
    setLoading(false);
    });
    console.log("rendering app");
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ currUser, loggedIn, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
