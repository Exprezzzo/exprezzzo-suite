import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBz3V8pB5M9Gk7-4qB_lMvL9-0aQkq9q_Q",
  authDomain: "exprezzzo-sandbox-admin.firebaseapp.com",
  projectId: "exprezzzo-sandbox-admin",
  storageBucket: "exprezzzo-sandbox-admin.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456789012345",
  measurementId: "G-XXXXXXXXXX"
};

let app = null, auth = null, db = null, storage = null, functions = null, analytics = null;

if (typeof window !== 'undefined') {
  try {
    app = getApp();
  } catch {
    app = initializeApp(firebaseConfig);
  }

  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
  functions = getFunctions(app);

  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}

export { app, auth, db, storage, functions, analytics };
export default app;