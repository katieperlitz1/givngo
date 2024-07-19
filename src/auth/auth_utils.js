import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export function getUserId() {
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "userData", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setCurrUser(docSnap.data());
        } else {
          console.log("No such document!");
        }
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);
  return {
    currUser,
  };
}

export function authSignOut() {
  auth.signOut();
}
