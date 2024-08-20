import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

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

export async function addFavorite(currUser, productId) {
  if (currUser) {
    const userDocRef = doc(db, "userData", currUser.userId);
    await updateDoc(userDocRef, {
      favorites: arrayUnion(productId),
    });
    console.log("Added favorite")
  } else {
    console.log("Not signed in");
    window.location.href = "/signin";
  }
}

export async function removeFavorite(currUser, productId) {
  if (currUser) {
    const userDocRef = doc(db, "userData", currUser.userId);
    await updateDoc(userDocRef, {
      favorites: arrayRemove(productId),
    });
    console.log("Removed favorite")
  } else {
    console.log("Not signed in");
    window.location.href = "/signin";
    
  }
}





