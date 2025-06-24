"use client";

import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/firebaseConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login");

  const handleSubmit = async () => {
    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
        alert("✅ Logged in!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("✅ Account created!");
      }
      setEmail("");
      setPassword("");
    } catch (error: any) {
      alert(`❌ ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        {mode === "login" ? "Login" : "Sign Up"}
      </h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border px-3 py-2 mb-3 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border px-3 py-2 mb-3 rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-black text-white w-full py-2 mb-2 rounded"
      >
        {mode === "login" ? "Log In" : "Sign Up"}
      </button>
      <button
        onClick={() => setMode(mode === "login" ? "signup" : "login")}
        className="text-sm text-blue-600 underline w-full text-center"
      >
        {mode === "login" ? "Need an account?" : "Already have an account?"}
      </button>
    </div>
  );
}
