// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, connectFirestoreEmulator, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(firebase_app);
export const db = getFirestore(firebase_app);

connectFirestoreEmulator(db, "localhost", 8080)
connectAuthEmulator(auth, "http://localhost:9099");