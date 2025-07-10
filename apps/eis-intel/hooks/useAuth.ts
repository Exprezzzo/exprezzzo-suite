// apps/eis-intel/hooks/useAuth.ts
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { db } from "../lib/firebase";

export function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    return onAuthStateChanged(auth, setUser);
  }, []);
  return {
    user,
    signIn: async () => {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(getAuth(), provider);
    },
    signOut: async () => {
      await signOut(getAuth());
    }
  };
}
