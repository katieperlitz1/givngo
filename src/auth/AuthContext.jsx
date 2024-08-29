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
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        const docRef = doc(db, "userData", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCurrUser({...docSnap.data(), userId:user.uid});
        } else {
          console.log("No such document!");
        }
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
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
