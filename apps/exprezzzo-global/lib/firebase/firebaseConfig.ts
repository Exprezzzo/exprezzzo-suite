import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTKo8c8fP280W7K32MQRN_Fhq_obkfOVc",
  authDomain: "exprezzzo-suite.firebaseapp.com",
  projectId: "exprezzzo-suite",
  storageBucket: "exprezzzo-suite.firebasestorage.app",
  messagingSenderId: "72476263764",
  appId: "1:72476263764:web:8ca9fe728f2980f4b1b4c1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
