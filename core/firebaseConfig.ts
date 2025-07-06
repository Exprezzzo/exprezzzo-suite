import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { getAnalytics, Analytics, isSupported } from 'firebase/analytics';
import { getPerformance, FirebasePerformance } from 'firebase/performance';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

if (process.env.NODE_ENV === 'development') {
  const required = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
  const missing = required.filter(k => !firebaseConfig[k as keyof FirebaseConfig]);
  if (missing.length) throw new Error(`Missing Firebase config keys: ${missing.join(', ')}`);
}

const app: FirebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth: Auth | null = typeof window !== 'undefined' ? getAuth(app) : null;
export const db: Firestore | null = typeof window !== 'undefined' ? getFirestore(app) : null;
export const storage: FirebaseStorage | null = typeof window !== 'undefined' ? getStorage(app) : null;

let analytics: Analytics | null = null;
let performance: FirebasePerformance | null = null;

if (typeof window !== 'undefined') {
  isSupported().then(supported => {
    if (supported && firebaseConfig.measurementId) analytics = getAnalytics(app);
  });
  if (process.env.NODE_ENV === 'production') performance = getPerformance(app);
}

export { app as firebaseApp, analytics, performance };
export default app;
